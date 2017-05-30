app.controller('GalleryController', ['$scope', function($scope) {
  $scope.galleryshow = false;

  $scope.galleries = [
    {
      image: '../../images/img_1.jpg'
    },
    {
      image: '../../images/img_2.jpg'
    },
    {
      image: '../../images/img_3.jpg'
    },
    {
      image: '../../images/img_4.jpg'
    }
  ];

  $scope.cupcakes = [
    {
      title: "Nice",
      image: '../../images/img_1.jpg'
    },
    {
      title: "Nice",
      image: '../../images/img_2.jpg'
    },
    {
      title: "Nice",
      image: '../../images/img_3.jpg'
    },
    {
      title: "Nice",
      image: '../../images/img_4.jpg'
    }
  ];
}]);
