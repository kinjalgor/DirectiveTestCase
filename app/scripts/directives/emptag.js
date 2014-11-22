'use strict';

/**
 * @ngdoc directive
 * @name directiveDemoApp.directive:empTag
 * @description
 * # empTag
 */
angular.module('directiveDemoApp')
  .directive('empTag', function () {
      return {
          templateUrl: '../../../Template/EmployeeTemplate.html',
          restrict: 'E',
          //link: function postLink(scope, element, attrs) {
          //    element.text('this is the empTag directive');
          //},
          scope: {
              event: "=",
              upvote: "&",
              downvote: "&"
          }

      };
  });
