/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerDetailController', function (EffortTypes, $stateParams, Efforts, $scope, $cordovaDatePicker, $ionicPlatform)   {

    $scope.select = {};
    var effortid = $stateParams.id;

    $scope.userseffort = Efforts.getbyid(effortid);
    $scope.efforts = EffortTypes.query();
    //Picker only testable in emulator/on device
    $scope.showDatePicker = function() {

      minDate = ionic.Platform.isIOS() ? new Date() : (new Date()).valueOf();
      var options = {
        date: $scope.userseffort.performancedate,
        mode: 'date', // or 'time'
        minDate: minDate,
        allowOldDates: true,
        allowFutureDates: false,
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };

      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(options).then(function(date){
          alert(date);
        });
      });
    };

    $scope.showStartTime = function(){
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };
      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(timeOptions).then(function(date){
          //alert(date);
        });
      });
    };

    $scope.showEndTime = function(){
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };
      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(timeOptions).then(function(date){
          //alert(date);
        });
      });
    };


    $scope.save = function(amount){
      Efforts.update($stateParams.id, amount, $scope.select.effort);
    }

  });
