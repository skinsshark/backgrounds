app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books';
  $scope.promo = 'asdf';
  $scope.photos = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: '../../src/resources/images/test.jpg' ,
    likes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: '../../src/resources/images/tester.jpg' ,
    likes: 0
  },
  {
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0 
  },
  {
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0 
  }
];
}]); 