import { Application } from 'express';

import { addressSearch } from './controllers/geomatch';

export const init = (app: Application): void => {
  app.get('/address-search', addressSearch);
};
