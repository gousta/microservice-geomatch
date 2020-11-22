import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { addressSearch } from './controllers/geomatch';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.get('/address-search', addressSearch);
};
