'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('bsoi', ['bsoi', function(bsoi) {
    return function(scope, elm, attrs) {
      elm.text(bsoi);
    };
  }]).
  directive('discount', function() {
    console.log('discount=');
    return {
      restrict: "A",
      transclude: true,
      template: "<div><div ng-transclude></div>Discounted!</div>",
      replace: false,
      link: function (scope, element, attr) {
        console.log(['LINKing...', scope,element,attr]);
      }
    };
  }).
  directive('custom', function() {
    console.log('custom directive');
    return {
      restrict: "E",
      template: "<div>Custom Directive</div>",
    };
  })
  ;
