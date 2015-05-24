'use strict';

angular.module('cdu2015App')
  .controller('CiberaryCtrl', function ($scope, $http, socket, Auth) {
    $scope.books = [];

    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin();
    $scope.currentUser = Auth.getCurrentUser();

    $http.get('/api/books').success(function (books) {
      $scope.books = books;
      socket.syncUpdates('book', $scope.books);
    });
    $scope.addBook = function () {
      if ($scope.newBook === '') {
        return;
      }
      $http.post('/api/books', {name: $scope.newBook});
      $scope.newBook = '';
    };

    $scope.borrowBook = function (book) {
      if(!Auth.isLoggedIn() || book.info)
        return;

      $http.put('/api/books/' + book._id, {info: Auth.getCurrentUser().name});
    };

    $scope.deliverBook = function (book) {
      if(!Auth.isLoggedIn())
        return;

      if(Auth.getCurrentUser().name == book.info)
        $http.put('/api/books/' + book._id, {info: ''});
    };

    $scope.deleteBook = function(book) {
      $http.delete('/api/books/' + book._id);
    };


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('book');
    });

  });
