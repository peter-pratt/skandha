import bodyParser from 'body-parser';
import compression from 'compression';
import express, { Request, Response, NextFunction } from 'express';
import ApplicationError from './errors/application-error';
import logger from './logger';
import etherspotBundlerConfig from './config';
import { EtherspotBundlerClient } from './bundler/client';
import RpcError from './errors/rpc-error';

const app = express();

function logResponseTime(req: Request, res: Response, next: NextFunction) {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    let message = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;
    if (req.method === 'POST') {
      message += JSON.stringify(req.body);
    }
    logger.log({
      level: 'debug',
      message,
      consoleLoggerOptions: { label: 'API' }
    });
  });

  next();
}

app.use(logResponseTime);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

new EtherspotBundlerClient({
  config: etherspotBundlerConfig,
  server: app
});

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  console.log(err);

  if (err instanceof RpcError) {
    const error = {
      message: err.message,
      data: err.data,
      code: err.code
    };
    return res.status(200).json({
      jsonrpc: req.body.jsonrpc,
      id: req.body.id,
      error
    });
  }

  return res.status(err.status || 500).json({
    error: 'Unexpected behaviour'
  });
});

export default app;
