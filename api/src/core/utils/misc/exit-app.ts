import { AppError } from '@app/core/errors/app-error.js';
import { logger } from '@app/core/log.js';

/**
 * Exit application.
 */
export const exitApp = (error?: Error, exitCode?: number) => {
    if (!error) {
        // Kill application immediately
        process.exitCode = exitCode ?? 0;
        return;
    }

    // Allow non-fatal errors to throw but keep the app running
    if (error instanceof AppError) {
        if (!error.fatal) {
            logger.trace(error.message);
            return;
        }

        // Log last error
        logger.error(error);

        // Kill application
        process.exitCode = exitCode;
    } else {
        // Log last error
        logger.error(error);

        // Kill application
        process.exitCode = exitCode;
    }
};
