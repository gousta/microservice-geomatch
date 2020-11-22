import GoogleMapsDriver from '../drivers/googlemaps';
import PolygonDriver from '../drivers/polygonLookup';
import { District, Location } from '../../types/geomatch';
import cache from './cache';

export function getDistrictByLocation(location: Location): Promise<District | null> {
  return PolygonDriver.getDistrictByLocation(location);
}

export function getLocationByAddress(address: string): Promise<Location | null> {
  // we should benefit from zip codes search in capital "EC1" and "ec1" being treated the same
  const addressNormalized = address.toLocaleLowerCase();

  return GoogleMapsDriver.getLocationByAddress(addressNormalized);
};

export async function getDistrictByAddress(address: string): Promise<District | null> {
  const cacheKey = address.toLocaleLowerCase().replace(/\s+/g, "_");
  const cachedAddressResult = await cache.get(cacheKey);

  if (cachedAddressResult) {
    return JSON.parse(cachedAddressResult) as District;
  }

  const location = await getLocationByAddress(address);

  if (location) {
    const district = await getDistrictByLocation(location);

    await cache.set(cacheKey, JSON.stringify(district));

    return district;
  }

  return Promise.resolve(null);
}
