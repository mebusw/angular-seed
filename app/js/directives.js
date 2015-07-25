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
  directive('eat', function() {
    console.log('eat directive');
    return {
      restrict: "EA",
      scope: {
        flavor: "@"
      },
      template: "<div>{{flavor}}</div>"
    };
  }).
  directive('drink', function() {
    console.log('drink directive');
    return {
      restrict: "EA",
      scope: {
        flavor: "="
      },
      controller: function () {
        this.drinkMilk = function (milk) {
          console.log(milk);
        }
      },
      template: "<input ng-model='flavor' readonly placeholder='Drink Directive' />",
    };
  }).
  directive('greeting', function() {
    console.log('drink directive');
    return {
      restrict: "E",
      scope: {
        greet: "&"
      },
      template: "<input ng-model='userName'/><button ng-click='greet({name:userName})'>Say Hello</button>",
    };
  })
  ;
