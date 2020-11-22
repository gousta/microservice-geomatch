require('dotenv').config();

const ENVIRONMENT: string = process.env.NODE_ENV || 'development';

interface IConfig {
  environment: string;
  port: string | number;
  googlemaps: {
    apiKey: string | null;
  };
}

const env = {
  PORT: process.env.PORT as string,
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY as string,
};

const config: IConfig = {
  environment: ENVIRONMENT,
  port: env.PORT || 8080,
  googlemaps: {
    apiKey: env.GOOGLE_MAPS_API_KEY || null,
  }
};

export default config;
