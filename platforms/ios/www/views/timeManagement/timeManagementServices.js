/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function ($http) {
    return {
      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        var config = {headers: {'x-session': sessionId, 'x-key': userid}};
        return $http.post('http://backend-dev.kevinott.de/api/efforts', {
          amount: 5,//amount,
          moduleid: moduleid,
          studentid: studentid,
          efforttypeid: efftypeid,
          performancedate: performancedate
        }, config);
      }
    }
  })

  .factory('EffortTypes', function ($resource) {
    return {
      query: function () {
        return $resource('http://backend-dev.kevinott.de/api/efforttypes', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      }
    }
  })

  .factory('Modules', function ($resource) {
    return {
      query: function () {
        return $resource('http://backend-dev.kevinott.de/api/modules/student', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      }
    };
  });
