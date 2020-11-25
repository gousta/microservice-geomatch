import { Client, GeocodeResponse } from '@googlemaps/google-maps-services-js';
import config from '../../config';
import { Location } from '../../types/geomatch';

export const key = config.googlemaps.apiKey;

const client = new Client({
  config: {
    timeout: 5000,
  }
});

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
};

function getAddressComponentByType(components: AddressComponent[], type: string): string | null {
  const lookup = components.find((component: AddressComponent) => {
    return component.types.includes(type);
  });

  return lookup?.short_name || null;
}

export async function getLocationByAddress(address: string): Promise<Location | null> {
  const response: GeocodeResponse = await client.geocode({ params: { address, key } });
  const result = response.data?.results?.[0];

  if (result) {
    return {
      lat: result?.geometry?.location?.lat,
      lng: result?.geometry?.location?.lng,
      address1: getAddressComponentByType(result.address_components, 'route'),
      address2: result?.formatted_address,
      postcode: getAddressComponentByType(result.address_components, 'postal_code'),
      city: getAddressComponentByType(result.address_components, 'postal_town'),
    };
  }

  return null;
}
