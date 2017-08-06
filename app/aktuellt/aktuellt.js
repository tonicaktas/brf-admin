'use strict';

angular.module('brf.aktuellt', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aktuellt', {
    templateUrl: 'aktuellt/aktuellt.html',
    controller: 'AktuelltCtrl'
  });
}])

.controller('AktuelltCtrl', [function() {

}]);
