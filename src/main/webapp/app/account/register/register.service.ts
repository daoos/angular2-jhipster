(function () {
    'use strict';

    angular
        .module('angular2JhipsterApp.account')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
