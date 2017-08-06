'use strict';

angular.module('brf.gym', ['ngRoute','firebase']).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gym', {
    templateUrl: 'gym/gym.html',
    controller: 'GymCtrl'
  });
}]).
controller('GymCtrl',['$scope','$firebaseArray','$firebaseObject',function($scope, $firebaseArray,$firebaseObject) {

  const ref = firebase.database().ref().child('gym');


  this.gym = $firebaseObject(ref);

  // const rootRef = firebase.database().ref().child('contacts');
  // const ref = rootRef.child('info');
  // this.info = $firebaseObject(ref);



  $scope.prov = $firebaseObject(ref);

  var id = $scope.prov;



  $scope.editFormSubmit = function(){
    $scope.prov.$save().then(function(ref){
      console.log('edited', ref);

    });
  }

  $scope.visaform = false;

  $scope.showEditForm = function(){
    $scope.visaForm = true;
  }


  console.log(id);
 }]);
