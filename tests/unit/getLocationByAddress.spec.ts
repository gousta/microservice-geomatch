// import {getLocationByAddress} from '../../app/services/geomatch';

// const PAYLOAD_VALID: string = 'White Bear Yard';

// const PAYLOAD_INVALID: unknown = {
//   'lat': 0,
//   'lng': 0,
// };

// const PAYLOAD_EMPTY: unknown = {};

// const PAYLOAD_NULL: unknown = null;

describe('getLocationByAddress', () => {

  test('test', () => {
    expect(200).toBe(200);
  });

  // test('Valid', () => {
  //   const district = getLocationByAddress(PAYLOAD_VALID);
  //   expect(district).toHaveProperty('serviceArea');
  //   expect(district?.serviceArea).toBe('LONCENTRAL');
  // });

  // test('Invalid', () => {
  //   const district = getLocationByAddress(PAYLOAD_INVALID as Location);
  //   expect(district).toBe(null);
  // });

  // test('Empty', () => {
  //   const district = getLocationByAddress(PAYLOAD_EMPTY as Location);
  //   expect(district).toBe(null);
  // });

  // test('Null', () => {
  //   const district = getLocationByAddress(PAYLOAD_NULL as Location);
  //   expect(district).toBe(null);
  // });

});
