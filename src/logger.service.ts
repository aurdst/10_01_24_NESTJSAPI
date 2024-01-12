// logger.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { createLogger } from 'winston';
import { winstonConfig } from './winston.config';

const winstonLogger = createLogger(winstonConfig);

@Injectable()
export class LoggerService extends Logger {
  constructor() {
    super();
  }

  log(message: string, context?: string) {
    winstonLogger.info({ message, context });
    super.log(message, context);
  }

  error(message: string, trace: string, context?: string) {
    winstonLogger.error({ message, trace, context });
    super.error(message, trace, context);
  }

  warn(message: string, context?: string) {
    winstonLogger.warn({ message, context });
    super.warn(message, context);
  }

  debug(message: string, context?: string) {
    winstonLogger.debug({ message, context });
    super.debug(message, context);
  }
}
