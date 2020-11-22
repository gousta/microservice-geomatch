# Microservice Geocode

## How to run

### Install
Run `cp .env.example .env` to create your own local .env and fill in the details
Run `npm install` from project root

### Testing
Run `npm run test`

### Development
Run `npm run dev`

### Production
Run `docker-compose up -d` from project root to start docker containers needed (node app starts automatically)
Open http://localhost:8081/address-search?address= on your browser and start searching!

## What's inside

### Basics

[x] TypeScript

[x] Docker

[x] Tests

### Extras

[x] Implement validation of input

[ ] Implement inter-service communication

[x] Implement caching such service might benefit from

[ ] Architect the system the way that if the first address-to-coordinate provider can't identify search strings, a series of other location providers can be tried. It is not required to implement other location providers, we are interested in how you would 'future proof' for this eventuality
