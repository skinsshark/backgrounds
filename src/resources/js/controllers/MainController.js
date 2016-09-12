app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Backgrounds';
  $scope.desc = 'a collection of photographs i took that i like to use as backgrounds';
  $scope.instruc = 'click on an image to open it up in a new tab to save the image';
  $scope.photos = [ 
  { 
    name: 'Cardwell, Montana', 
    // price: 19, 
    // pubdate: new Date('2014', '03', '08'), 
    cover: '/src/resources/images/cardwell-demo.png' ,
    link: 'https://github.com/skinsshark/Backgrounds/raw/master/src/resources/images/cardwell.jpg'
  }, 
  { 
    name: 'West Yellowstone, Montana', 
    // price: 8, 
    // pubdate: new Date('2013', '08', '01'), 
    cover: '/src/resources/images/tester.jpg' ,
    link: 2
  },
  {
    name: 'Vancouver, British Columbia', 
    // price: 8, 
    // pubdate: new Date('2013', '08', '01'), 
    cover: '/src/resources/images/test.jpg',
    likes: 0 
  } // ,
  // {
  //   name: 'Program or be Programmed', 
  //   price: 8, 
  //   pubdate: new Date('2013', '08', '01'), 
  //   cover: 'img/program-or-be-programmed.jpg',
  //   likes: 0 
  // }
];
}]); 