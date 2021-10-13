const endpoints = {
  authorizeToken: '/authorize/token',
  getWeather: '/api/v1/current/:locationId',
  getLocation: '/api/v1/location/:coordinates',
  getLocationList: '/api/v1/location/search/:query',
  weatherIcon: '/static/images/symbols/:symbol.png',
};

export default endpoints;
