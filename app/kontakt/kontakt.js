'use strict';

angular.module('brf.kontakt', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kontakt', {
    templateUrl: 'kontakt/kontakt.html',
    controller: 'KontaktCtrl'
  });
}])

.controller('KontaktCtrl', [function() {

}]);
