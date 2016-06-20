(function() {
    'use strict';

    angular
        .module('angular2JhipsterApp.account')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('api/account/change_password', {}, {});

        return service;
    }
})();
