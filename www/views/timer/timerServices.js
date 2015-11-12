angular.module('app')

.factory('stepwatch', function (SW_DELAY, $timeout) {
  var data = {
      seconds: 0,
      minutes: 0,
      hours: 0
    },
    stopwatch = null;

  var start = function () {
    stopwatch = $timeout(function () {
      data.seconds++;
      if (data.seconds >= 60) {
        data.seconds = 00;
        data.minutes++;
        if (data.minutes >= 60) {
          data.minutes = 0;
          data.hours++;
        }
      }
      start()
      $scope.timerRunning = true;
    }, SW_DELAY);
  };


  var stop = function () {
    $timeout.cancel(stopwatch);
    stopwatch = null;
    $scope.timerRunning = false;
    $scope.amount = data;
  };

  var reset = function () {
    stop()
    data.seconds = 0;
  };


  return {
    data: data,
    start: start,
    stop: stop,
    reset: reset
  };

})

.factory('Efforts' , function($resource) {

    return {

      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        return $resource('http:/backend-dev.kevinott.de/api/efforts', {}, {
          query: {
            method: 'POST',
            headers: {'x-session': sessionId, 'x-key': userid},
            params: {
              amount: amount,
              moduleid: moduleid,
              studentid: studentid,
              efftypeid: efftypeid,
              performancedate: performancedate,
            },
            isArray: false
          }
        }).save();

      },

      query: function ($http, $window) {
        return $resource('http://backend-dev.kevinott.de/api/efforts/student', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();

      }
    }
  })


.factory('Modules' , function($resource) {

      return {

        query: function ($http, $window) {
          return $resource('http://backend-dev.kevinott.de/api/modules/student', {}, {
            query: {
              method: 'GET',
              headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
              isArray: true
            }
          }).query();

        }
      };
    })


