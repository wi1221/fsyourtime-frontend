angular.module('app')

  .factory('UserService', function ($http, $window) {
    return {
      signIn: function (username, password) {
        return $http.post(options.api.base_url + 'login', {
          username: username,
          password: password
        });
      },

      getModules: function (mySessionId, userid) {
        return $http.get(options.api.base_url + 'api/modules/student/', {
          headers: {'x-session': mySessionId, 'x-key': userid}
        });
      }
    }
  });
