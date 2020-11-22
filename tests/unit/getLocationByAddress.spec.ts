import { getLocationByAddress } from '../../app/services/geomatch';

const PAYLOAD_VALID: string = 'White Bear Yard';
const PAYLOAD_INVALID: string = '84u2j0fj0iuj0esdsfφκδφλφ';

describe('getLocationByAddress', () => {

  test('Valid', async () => {
    const location = await getLocationByAddress(PAYLOAD_VALID);

    expect(location).toHaveProperty('lat');
    expect(location).toHaveProperty('lng');
    expect(location).toHaveProperty('postcode');
    expect(location).toHaveProperty('address1');
    expect(location).toHaveProperty('address2');
  });

  test('Invalid', async () => {
    const location = await getLocationByAddress(PAYLOAD_INVALID);

    expect(location).toBe(null);
  });

});
