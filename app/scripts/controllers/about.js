'use strict';

/**
 * @ngdoc function
 * @name directiveDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the directiveDemoApp
 */
angular.module('directiveDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
