// winston.config.ts
import { transports, format } from 'winston';

const logFormat = format.combine(
  format.timestamp(),
  format.simple()
);

export const winstonConfig = {
  transports: [
    new transports.Console({ format: logFormat }),
    new transports.File({ filename: 'logs/error.log', level: 'error', format: logFormat }),
    new transports.File({ filename: 'logs/combined.log', format: logFormat }),
  ],
};
