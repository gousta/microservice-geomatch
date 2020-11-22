import { Request, Response } from 'express';
import config from '../../config';

export function healthCheck(_: Request, res: Response): Response {
  return res.json({
    environment: config.environment,
    uptime: process.uptime()
  });
}
