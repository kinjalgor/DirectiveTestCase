'use strict';

/**
 * @ngdoc function
 * @name directiveDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directiveDemoApp
 */
angular.module('directiveDemoApp')
  .controller('MainCtrl', function ($scope) {
      $scope.events = [
            { id: 1, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 2, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 3, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 4, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 5, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 6, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 7, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 8, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
            { id: 9, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 },
      ];
      $scope.upVote = function upVote(event) {
          event.vote++;
      };
      $scope.downVote = function downVote(event) {
          event.vote--;
      };
  });
