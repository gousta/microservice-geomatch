import { Location } from '../../types/geomatch';
import { getDistrictByLocation } from '../../app/services/geomatch';

const PAYLOAD_VALID: unknown = {
  lat: 51.5222691,
  lng: -0.1098115,
};

const PAYLOAD_INVALID: unknown = {
  lat: 0,
  lng: 0,
};

const PAYLOAD_EMPTY: unknown = {};

const PAYLOAD_NULL: unknown = null;

describe('getDistrictByLocation', () => {

  test('Valid', async () => {
    const district = await getDistrictByLocation(PAYLOAD_VALID as Location);
    expect(district).toHaveProperty('serviceArea');
    expect(district?.serviceArea).toBe('LONCENTRAL');
  });

  test('Invalid', async () => {
    const district = await getDistrictByLocation(PAYLOAD_INVALID as Location);
    expect(district).toBe(null);
  });

  test('Empty', async () => {
    const district = await getDistrictByLocation(PAYLOAD_EMPTY as Location);
    expect(district).toBe(null);
  });

  test('Null', async () => {
    const district = await getDistrictByLocation(PAYLOAD_NULL as Location);
    expect(district).toBe(null);
  });

});
