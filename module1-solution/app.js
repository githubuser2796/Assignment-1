(function() {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

//   .controller('LunchCheckController',function($scope){
//     $scope.menu="nehaha";
//     $scope.message="";
//     $scope.check=function(){
//       var items= $scope.menu.length();
//       var msg=$scope.message;
//       if(items<=3)
//       {
//         msg="Enjoy!";
//         return msg;
//       }
//       if(items>3)
//       {
//         msg="Too much!";
//         return msg;
//       }
//
//   }
// });

  LunchCheckController.$inject=['$scope','$filter'];
  function LunchCheckController($scope,$filter)
  {
    $scope.menu="nehaha";
    $scope.message="";
    $scope.check=function(){
      var items= $scope.menu.length();
      var msg=$scope.message;
      if(items<=3)
      {
        msg="Enjoy!";
        return msg;
      }
      if(items>3)
      {
        msg="Too much!";
        return msg;
      }

    }
  }

})();
