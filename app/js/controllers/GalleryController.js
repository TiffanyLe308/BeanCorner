app.controller('GalleryController', ['$scope', function($scope) {
  $scope.gallery = false;

  $scope.treats = [
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
}]);
