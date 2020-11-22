# Microservice Geocode

### Install
Run `npm install` from project root

### Development
Run `npm run dev`

### Production
Run `docker-compose up -d` from project root to start docker containers needed (node app starts automatically)

### Basics
[x] TypeScript
[x] Docker
[x] Tests

### Extras
[x] Implement validation of input
[ ] Implement inter-service communication
[ ] Implement caching such service might benefit from
[ ] Architect the system the way that if the first address-to-coordinate provider can't identify search strings, a series of other location providers can be tried. It is not required to implement other location providers, we are interested in how you would 'future proof' for this eventuality
