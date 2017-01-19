app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Backgrounds';
  $scope.desc = 'a collection of photographs taken by me with my phone that i like to use as wallpapers';
  $scope.instruc = 'click on an image to open it up in a new tab to save the image';
  $scope.photos = [
    {
      name: 'Yellowstone, Probably',
      cover: '/resources/images/yellowstone-demo.png',
      link:'yellowstone.jpg'

    },
    {
      name: 'West Yellowstone, Montana',
      cover: '/resources/images/wyellowstone-demo.png',
      link: 'wyellowstone.jpg'
    },
    {
      name: 'Cardwell, Montana',
      cover: '/resources/images/cardwell-demo.png',
      link: 'cardwell.jpg'
    },
    {
      name: 'Norris Geyser Basin, Wyoming',
      cover: '/resources/images/norris-geyser-demo.png',
      link:'norris-geyser.jpg'
    },
    {
      name: 'Hardwood Lookout Trail, Algonquin Park',
      cover: '/resources/images/hardwood-lookout-demo.png',
      link: 'hardwood-lookout.jpeg'
    },
    {
      name: 'Vancouver, British Columbia',
      cover: '/resources/images/vancouver-demo.png',
      link: 'vancouver.jpg'
    },
    {
      name: 'Aga Khan Museum, Toronto',
      cover: '/resources/images/aga-khan-demo.png',
      link: 'aga-khan.jpg'
    }];
  }]);
