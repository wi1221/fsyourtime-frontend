angular.module('app')

  .filter('numberFixedLen', function () {
    return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      if (isNaN(num) || isNaN(len)) {
        return n;
      }
      num = ''+num;
      while (num.length < len) {
        num = '0'+num;
      }
      return num;
    };
  })

  .constant('SW_DELAY', 1000)


  .controller('MainCtrl', function($scope, $state, stepwatch) {
    $scope.myStopwatch = stepwatch;
  });
