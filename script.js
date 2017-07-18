var app = angular.module('todoModule', []);

app.controller('todoCtrl', function($scope) {
  $scope.todoArray = [];

  $scope.addNew = function(entry){
    $scope.todoArray.push({name: entry});
  };

  $scope.clearAll = function() {
    $scope.todoArray = [];
  };

  $scope.removeItem =  function(item) {
      var index = $scope.todoArray.indexOf(item);
      $scope.todoArray.splice(index, 1);
  }
});
