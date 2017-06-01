app.controller('ContactUsController', ['$scope',  'weather', function($scope, weather) {
  $scope.articles = [
    {
      title: 'Best Bean To Cup Coffee Machines 2017',
      link: 'https://www.beantocupcoffeemachines.net/',
      description: 'Welcome to the home of the coffee maker review to find out everything you need to know for the new home hot drinks brewer or coffee connoisseur alike.'
    },
    {
      title: 'Climate Change Is Threatening Your Morning Caffeine Fix',
      link: 'https://www.bloomberg.com/news/articles/2017-04-28/the-scientists-fighting-to-save-us-from-a-world-without-coffee',
      description: 'While Washington debates whether climate change is a hoax or an imminent threat, the world coffee industry is taking action to protect its business.'
    },
    {
      title: 'Does Coffee Dehydrate You? Science Says No',
      link: 'http://sprudge.com/coffee-dehydrate-science-says-no-120588.html',
      description: 'We all have heard about — and most likely experienced — the diuretic effects of coffee. When you drink large volumes to hydrate, you urinate more.'
    }
  ];

  weather.then(function(data) {
    $scope.weather = data.data;
  });
}]);
