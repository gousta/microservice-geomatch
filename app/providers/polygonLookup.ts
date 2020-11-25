import * as turf from '@turf/turf';
import { District, Location, FormattedDistrict } from '../../types/geomatch';
import formattedDistricts from '../../formatted-districts.json';

const districts = formattedDistricts.features;

export async function getDistrictByLocation(location: Location): Promise<District | null> {
  if (location?.lat && location.lng) {
    const tPoint = turf.point([location.lng, location.lat]);

    const fDistrict = districts.find((district: FormattedDistrict) => {
      return turf.booleanPointInPolygon(tPoint, turf.polygon(district.geometry.coordinates));
    });

    if (fDistrict) {
      return {
        ...location,
        serviceArea: fDistrict.properties.Name,
      };
    }
  }

  return null;
}
