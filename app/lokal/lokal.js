'use strict';

angular.module('brf.lokal', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lokal', {
    templateUrl: 'lokal/lokal.html',
    controller: 'LokalCtrl'
  });
}])

.controller('LokalCtrl', ['$scope','$firebaseArray','$firebaseObject',function($scope, $firebaseArray,$firebaseObject) {

  var query = firebase.database().ref().orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
  });
});


$scope.prov= $firebaseObject(query);
console.log($scope.prov);

  //  this.lokal = $firebaseObject(ref);

  // const rootRef = firebase.database().ref().child('contacts');
  // const ref = rootRef.child('info');
  //  this.lokal = $firebaseObject(ref);








  $scope.editFormSubmit = function(){
    $scope.prov.$save().then(function(ref){
      console.log('edited', ref);

    });
  }

  $scope.visaform = false;

  $scope.showEditForm = function(){
    $scope.visaForm = true;
  }


  $scope.removeContact = function(key) {

    delete $scope.prov[key];
    $scope.prov.$save();


  }

 }]);
