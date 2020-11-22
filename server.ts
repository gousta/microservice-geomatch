import app from './app';
import config from './config';
import logger from './app/logger';

app.listen(config.port);

logger.info(`Listening on port: ${config.port}`);
logger.info(`Environment: ${config.environment}`);
