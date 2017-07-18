var app = angular.module('todoModule', []);

app.controller('todoCtrl', function($scope) {
  $scope.todoArray = [];

  $scope.addNew = function(entry){
    $scope.todoArray.push(entry);

  };
});
