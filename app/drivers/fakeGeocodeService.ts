import { Location } from '../../types/geomatch';

const FAKE_DATA = {
  lat: 0.0,
  lng: 0.0,
  address1: 'fake_address_1',
  address2: 'fake_address_2',
  postcode: 'fake_postcode',
  city: 'fake_city',
};

export async function getLocationByAddress(address: string): Promise<Location | null> {
  if (address === '[fake]') {
    return FAKE_DATA;
  }

  return null;
}

export default { getLocationByAddress };
