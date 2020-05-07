(function() {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope)
  {
    $scope.menu="";
    $scope.message="";
    $scope.check = function(){
      var items= $scope.menu;
      var total= items.split(",");
      var msg=$scope.message;
      if(total == "")
      {
      $scope.message =  "please enter value first!";
      return $scope.message;
      }
      if(total.length <= 3)
      {
        $scope.message ="Enjoy!"
        return $scope.message;
      }
      else if(total.length > 3) {
        $scope.message = "Too much!";
        return $scope.message;
      }
    }
  }

})();
