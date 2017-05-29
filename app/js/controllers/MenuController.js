app.controller('MenuController', ['$scope', function($scope) {
  $scope.espressos = [
    {
      title: 'Espresso',
      size_one: 'Small',
      size_two: 'Large',
      names: [
        {
          name: 'Capuchino',
          price_one: 1.85,
          price_two: 2.85
        },
        {
          name: 'Latte',
          price_one: 2.50,
          price_two: 3.50
        }
      ]
    },
    {
      title: 'Hot Tea',
      size_one: 'Small',
      size_two: 'Large',
      names: [
        {
          name: 'Capuchino',
          price_one: 1.85,
          price_two: 2.85
        },
        {
          name: 'Latte',
          price_one: 2.50,
          price_two: 3.50
        }
      ]
    }
  ];
}]);
