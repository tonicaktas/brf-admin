'use strict';

var config = {
apiKey: "AIzaSyA3L8IH4nwR-ZGizl14SKhtGyF_UORmUfU",
authDomain: "brf2-27b76.firebaseapp.com",
databaseURL: "https://brf2-27b76.firebaseio.com",
projectId: "brf2-27b76",
storageBucket: "brf2-27b76.appspot.com",
messagingSenderId: "425892193355"
};
firebase.initializeApp(config);
// Declare app level module which depends on views, and components
angular.module('b-admin', [
  'ngRoute',
  'firebase',
  'brf.gym',
  'brf.lokal',
  'brf.forad',
  'brf.lagenhet',
  'brf.aktuellt',
  'brf.infoblad',
  'brf.kontakt',
  'brf.home'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
