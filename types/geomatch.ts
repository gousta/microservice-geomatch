export interface Location {
  postcode: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  lat: number;
  lng: number;
}

export interface District {
  serviceArea: string;
  postcode: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  lat: number;
  lng: number;
}

export interface FormattedDistrict {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    Description: string;
    Name: string;
  };
}
