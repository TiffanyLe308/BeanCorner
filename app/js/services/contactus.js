app.factory('weather', ['$http', function($http) {
  return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=32.70&lon=-117.15&units=imperial&appid=ffd7e7d03b1e3c1f5ae429dd2a42ddfd')
    .then(function(data) {
      return data;
    }, function(err) {
      return err;
    });
}]);
