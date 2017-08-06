'use strict';

angular.module('brf.infoblad', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/infoblad', {
    templateUrl: 'infoblad/infoblad.html',
    controller: 'InfobladCtrl'
  });
}])

.controller('InfobladCtrl', [function() {

}]);
