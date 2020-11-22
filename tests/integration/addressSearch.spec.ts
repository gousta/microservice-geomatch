import { ERROR_ADDRESS_SHORT } from '../../app/constants/response';
import request from 'supertest';
import app from '../../app';

const PAYLOAD_VALID = {
  status: 'OK',
  search: 'White Bear Yard',
  location: {
    lat: 51.5222691,
    lng: -0.1098115,
    address1: 'White Bear Yard',
    address2: 'White Bear Yard, Holborn, London EC1R, UK',
    postcode: 'EC1R',
    city: 'London',
    serviceArea: 'LONCENTRAL'
  }
};

const PAYLOAD_NOTFOUND = {
  status: 'NOT_FOUND',
  search: 'f0 φιλε 20olak'
};

const PAYLOAD_BADREQUEST = {
  status: 'BAD_REQUEST',
  search: '',
  error: ERROR_ADDRESS_SHORT,
};

describe('Geomatch', () => {
  describe('/address-search GET', () => {

    test('valid address', (done: jest.DoneCallback) => {

      request(app)
        .get('/address-search')
        .query({ address: PAYLOAD_VALID.search })
        .then((res: request.Response) => {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty('status');
          expect(res.body).toHaveProperty('search');

          expect(res.body.location).toHaveProperty('serviceArea');
          expect(res.body.location).toHaveProperty('postcode');
          expect(res.body.location).toHaveProperty('address1');
          expect(res.body.location).toHaveProperty('address2');
          expect(res.body.location).toHaveProperty('city');
          expect(res.body.location).toHaveProperty('lat');
          expect(res.body.location).toHaveProperty('lng');

          expect(res.body.status).toBe(PAYLOAD_VALID.status);
          expect(res.body.search).toBe(PAYLOAD_VALID.search);
          expect(res.body.location.serviceArea).toBe(PAYLOAD_VALID.location.serviceArea);
          expect(res.body.location.postcode).toBe(PAYLOAD_VALID.location.postcode);
          expect(res.body.location.address1).toBe(PAYLOAD_VALID.location.address1);
          expect(res.body.location.address2).toBe(PAYLOAD_VALID.location.address2);
          expect(res.body.location.city).toBe(PAYLOAD_VALID.location.city);
          expect(res.body.location.lat).toBe(PAYLOAD_VALID.location.lat);
          expect(res.body.location.lng).toBe(PAYLOAD_VALID.location.lng);

          done();
        });
    });

    test('gibberish address', (done: jest.DoneCallback) => {
      request(app)
        .get('/address-search')
        .query({ address: PAYLOAD_NOTFOUND.search })
        .then((res: request.Response) => {
          expect(res.status).toBe(404);
          expect(res.body).toHaveProperty('status');
          expect(res.body).toHaveProperty('search');

          expect(res.body.status).toBe(PAYLOAD_NOTFOUND.status);
          expect(res.body.search).toBe(PAYLOAD_NOTFOUND.search);

          done();
        });
    });

    test('empty address', (done: jest.DoneCallback) => {
      request(app)
        .get('/address-search')
        .query({ address: PAYLOAD_BADREQUEST.search })
        .then((res: request.Response) => {
          expect(res.status).toBe(400);
          expect(res.body).toHaveProperty('status');
          expect(res.body).toHaveProperty('search');
          expect(res.body).toHaveProperty('error');

          expect(res.body.status).toBe(PAYLOAD_BADREQUEST.status);
          expect(res.body.search).toBe(PAYLOAD_BADREQUEST.search);
          expect(res.body.error).toBe(PAYLOAD_BADREQUEST.error);

          done();
        });
    });

  });
});
