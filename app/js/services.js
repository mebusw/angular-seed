'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  value('bsoi', 'success').
  factory('dataListService', ['$http', function($http){
  	return function (a,b){
  		console.log('dataListService: ' + a + b);
  	};
  }]);

