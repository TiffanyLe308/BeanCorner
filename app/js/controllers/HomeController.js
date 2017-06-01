app.controller('HomeController', ['$scope', function($scope) {
  $scope.menus = [
    {
      title: 'Special Holidays',
      description_one: 'Introducing something new and creative to give coffee drinkers a lot to celebrate. Pair the coffee with one of our mugs made by notNeutral, or a Hario V60 dripper',
      description_two: 'We’ll be selling the beans in cool new packages, designed with a flat bottom that keeps the bag upright and including a resealable zipper for freshness. We also offer ready or custom gift package.',
      image: '../../images/img_11.jpg',
      label: 'post-1'
    },
    {
      title: 'Classic Espresso',
      description_one: 'Our coffee full of flavour and can be really cranked up to maximum strength. A good quality gourmet coffee in the cup that takes you on a bit of a flavour journey.',
      description_two: 'Everyone has their own favourite when it comes to drinking coffee, so whether it’s a latte or americano, an espresso or a mocha, there will be a great choice for you here, and it is our job to help you find it.',
      image: '../../images/img_10.jpg',
      label: 'post-2'
    },
    {
      title: 'Custom Flavors',
      description_one: 'Smoother coffee made with passion. Custom coffee to suit taste & trends. Let\'s find your own taste with us.',
      description_two: 'We also offer caffeine free beverages, just ask one of our barista to help you choose your flavor and create a magnificent drink to brighten your day. Our certified, award winning, and high-volume ingredients can deliver a unique tasting profile.',
      image: '../../images/img_12.jpg',
      label: 'post-3'
    }
  ];

  $scope.latestevents = [
    {
      title: 'New Flavor',
      description: 'Local coffee events – find your local coffee roasters or prominent local cafes.',
      date: '31',
      month: 'March'
    },
    {
      title: 'Tasting',
      description: 'An event full of coffee companies, everything you want to know from bean to cup.',
      date: '26',
      month: 'April'
    },
    {
      title: 'Rainy Day',
      description: 'I like people who smile when it\'s raining, since they have a hot cup of coffee ',
      date: '17',
      month: 'May'
    }
  ];

  $scope.upcomingevents = [
    {
      title: 'Get Together',
      description: 'Meet or catch up with everyone you’ve wanted to see or missed due to a busy year of work.',
      date: '6',
      month: 'June'
    },
    {
      title: 'Me Time',
      description: 'Happiness is actually found in simple things. Good mood day is sponsored by coffee.',
      date: '17',
      month: 'June'
    },
    {
      title: 'Summer Heat',
      description: 'Iced coffee on a hot day can perform miracles. Give your ice the coffee it\'s deserved',
      date: '4',
      month: 'July'
    }
  ];
}]);
