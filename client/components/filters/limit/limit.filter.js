'use strict';

angular.module('cdu2015App')
  .filter('limit', function () {
    return function (input, limit) {
      if(limit >= 0)
        return input.slice(0, limit);
      return input;
    };
  });
