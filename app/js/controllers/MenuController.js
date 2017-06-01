app.controller('MenuController', ['$scope', function($scope) {
  $scope.coffee =
    {
      title: 'Coffee',
      size_one: 'Small',
      size_two: 'Large',
      names: [
        {
          name: 'Americano',
          price_one: 3.00,
          price_two: 3.50
        },
        {
          name: 'Affogato',
          price_one: 4.00,
          price_two: 5.00
        },
        {
          name: 'Breve/Irish Cream Breve',
          price_one: 3.50,
          price_two: 4.25
        },
        {
          name: 'Capuchino',
          price_one: 3.80,
          price_two: 4.50
        },
        {
          name: 'Caramel Hazenut',
          price_one: 3.70,
          price_two: 4.50
        },
        {
          name: 'Espresso',
          price_one: 2.50,
          price_two: 3.00
        },
        {
          name: 'Flat White',
          price_one: 3.50,
          price_two: 4.50
        },
        {
          name: 'Fresh Brewed Coffee',
          price_one: 3.50,
          price_two: 4.00
        },
        {
          name: 'Latte/Caramel Latte',
          price_one: 3.90,
          price_two: 4.70
        },
        {
          name: 'Macchiato',
          price_one: 3.00,
          price_two: 3.50
        },
        {
          name: 'Caramel/Vanilla Mocha',
          price_one: 4.50,
          price_two: 5.00
        },
        {
          name: 'Mocha Latte',
          price_one: 4.30,
          price_two: 4.90
        }
      ]
    };

  $scope.tea =
  {
    title: 'Tea',
    size_one: 'Small',
    size_two: 'Large',
    names: [
      {
        name: 'Chai Latte',
        price_one: 3.50,
        price_two: 4.00
      },
      {
        name: 'Cream Tea',
        price_one: 3.00,
        price_two: 3.50
      },
      {
        name: 'Flavor Black/Green/White Tea',
        price_one: 2.50,
        price_two: 3.50
      },
      {
        name: 'Herbal Tea',
        price_one: 2.50,
        price_two: 3.50
      },
      {
        name: 'Matcha Tea',
        price_one: 3.50,
        price_two: 4.50
      }
    ]
  };

  $scope.non =
  {
    title: 'Non-Caffeine',
    size_one: 'Small',
    size_two: 'Large',
    names: [
      {
        name: 'Hot Chocolate',
        price_one: 1.85,
        price_two: 2.85
      },
      {
        name: 'Steam Milk',
        price_one: 1.50,
        price_two: 2.00
      },
      {
        name: 'Flavor Infused/Mineral Water',
        price_one: 2.50,
        price_two: 3.50
      },
      {
        name: 'Smoothies',
        price_one: 3.50,
        price_two: 4.00
      },
      {
        name: 'Soft Drinks',
        price_one: 1.50,
        price_two: 2.00
      }
    ]
  };
}]);
