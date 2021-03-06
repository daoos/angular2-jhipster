ErrorHandlerInterceptor.$inject = ['$q', '$rootScope'];

function ErrorHandlerInterceptor ($q, $rootScope) {
    var service = {
        responseError: responseError
    };

    return service;

    function responseError (response) {
        if (!(response.status === 401 && (response.data === '' || (response.data.path && response.data.path.indexOf('/api/account') === 0 )))) {
            $rootScope.$emit('angular2JhipsterApp.httpError', response);
        }
        return $q.reject(response);
    }
}

export default ErrorHandlerInterceptor;
