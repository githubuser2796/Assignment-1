(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope)
  {
    $scope.menu="nehaha";
    $scope.message="";
  //   $scope.check=function(){
  //     var items= $scope.menu.length();
  //     var msg=$scope.message;
  //     if(items<=3)
  //     {
  //       msg="Enjoy!";
  //       return msg;
  //     }
  //     if(items>3)
  //     {
  //       msg="Too much!";
  //       return msg;
  //     }
  //
  //   }
  }

})());
