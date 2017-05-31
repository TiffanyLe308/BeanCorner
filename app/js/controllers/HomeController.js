app.controller('HomeController', ['$scope', function($scope) {
  $scope.menus = [
    {
      title: 'Special Holidays',
      description_one: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat lacus quam, a laoreet quam dictum a.',
      description_two: 'Praesent eros risus, commodo at pellentesque non, sagittis in sem. Sed varius augue sit amet felis condimentum feugiat. Maecenas quis enim semper nisi fringilla egestas. Aenean sagittis varius nisi, nec pellentesque dui gravida eu. Mauris ultrices ultricies purus, ut lacinia lacus euismod a. Sed ac dolor varius, pretium diam et, bibendum lacus. Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      image: '../../images/img_11.jpg',
      label: 'post-1'
    },
    {
      title: 'Classic Espresso',
      description_one: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat lacus quam, a laoreet quam dictum a.',
      description_two: 'Praesent eros risus, commodo at pellentesque non, sagittis in sem. Sed varius augue sit amet felis condimentum feugiat. Maecenas quis enim semper nisi fringilla egestas. Aenean sagittis varius nisi, nec pellentesque dui gravida eu. Mauris ultrices ultricies purus, ut lacinia lacus euismod a. Sed ac dolor varius, pretium diam et, bibendum lacus. Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      image: '../../images/img_10.jpg',
      label: 'post-2'
    },
    {
      title: 'Custom Flavors',
      description_one: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat lacus quam, a laoreet quam dictum a.',
      description_two: 'Praesent eros risus, commodo at pellentesque non, sagittis in sem. Sed varius augue sit amet felis condimentum feugiat. Maecenas quis enim semper nisi fringilla egestas. Aenean sagittis varius nisi, nec pellentesque dui gravida eu. Mauris ultrices ultricies purus, ut lacinia lacus euismod a. Sed ac dolor varius, pretium diam et, bibendum lacus. Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      image: '../../images/img_12.jpg',
      label: 'post-3'
    }
  ];

  $scope.lastestevents = [
    {
      title: 'New Flavor',
      description: 'Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      date: '31',
      month: 'March'
    },
    {
      title: 'Tasting',
      description: 'Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      date: '26',
      month: 'April'
    },
    {
      title: 'Rainy Day',
      description: 'Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      date: '17',
      month: 'May'
    }
  ];

  $scope.upcomingevents = [
    {
      title: 'Get Together',
      description: 'Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      date: '6',
      month: 'June'
    },
    {
      title: 'Me Time',
      description: 'Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      date: '17',
      month: 'June'
    },
    {
      title: 'Summer Heat',
      description: 'Quisque eget lacus risus. Pellentesque quis semper velit. Morbi tempus quam sed lorem malesuada luctus.',
      date: '4',
      month: 'July'
    }
  ];
}]);
