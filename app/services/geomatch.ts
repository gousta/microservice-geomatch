import GoogleMapsDriver from '../drivers/googlemaps';
import PolygonDriver from '../drivers/polygonLookup';
import { District, Location } from '../../types/geomatch';

export function getDistrictByLocation(location: Location): Promise<District | null> {
  return PolygonDriver.getDistrictByLocation(location);
}

export function getLocationByAddress(addressNormalized: string): Promise<Location | null> {
  return GoogleMapsDriver.getLocationByAddress(addressNormalized);
};

export async function getDistrictByAddress(address: string): Promise<District | null> {
  // we should benefit from zip codes search in capital "EC1" and "ec1" being treated the same
  const addressNormalized = address.toLocaleLowerCase();

  const location = await getLocationByAddress(addressNormalized);

  if (location) {
    const district = await getDistrictByLocation(location);

    return district;
  }

  return Promise.resolve(null);
}
