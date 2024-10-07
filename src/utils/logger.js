import winston, { format } from "winston";
const { timestamp, combine, colorize, printf } = format;

const loggerConfig = {
        format: combine(
            timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),
            colorize(),
            printf((info) => `| ${info.level} | ${info.timestamp} | ${info.message} |`)
        ),
        transports: [
            new winston.transports.Console({ level: 'info' }),
            new winston.transports.File({
                level: 'error',
                filename: './logs/errors.log'
            })
        ]
    }

export const logger = winston.createLogger(loggerConfig);
