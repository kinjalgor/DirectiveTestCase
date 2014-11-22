'use strict';

describe('Directive: empTag', function () {

  // load the directive's module
  beforeEach(module('directiveDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
      var event = { id: 1, name: 'chirayu', date: 10 / 12 / 2014, city: 'vadodara', vote: 0 };
     element = angular.element('<emp-tag event="event" upvote="upVote(event)" downvote="downVote(event)"></emp-tag>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the empTag directive');
  }));
});
