require('dotenv').config();

const ENVIRONMENT: string = process.env.NODE_ENV || 'development';

export interface IConfig {
  environment: string;
  port: string | number;
  redis: {
    url: string;
  };
  common: {
    minAddressLength: number;
  };
  googlemaps: {
    apiKey: string;
  };
}

const env = {
  PORT: process.env.PORT as string,
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY as string,
  REDIS_URL: process.env.REDIS_URL as string,
};

const config: IConfig = {
  environment: ENVIRONMENT,
  port: env.PORT || 8080,
  redis: {
    url: env.REDIS_URL,
  },
  common: {
    minAddressLength: 2,
  },
  googlemaps: {
    apiKey: env.GOOGLE_MAPS_API_KEY,
  }
};

export default config;
