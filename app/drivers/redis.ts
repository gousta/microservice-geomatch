import { createNodeRedisClient } from 'handy-redis';
import config from '../../config';

const client = createNodeRedisClient(config.redis.url);

export default client;
