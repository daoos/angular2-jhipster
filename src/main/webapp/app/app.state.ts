
AppStateConfig.$inject = ['$stateProvider'];

function AppStateConfig($stateProvider) {
    $stateProvider.state('app', {
        abstract: true,
        views: {
            'navbar@': {
                templateUrl: 'app/layouts/navbar/navbar.html',
                controller: 'NavbarController',
                controllerAs: 'vm'
            }
        },
        resolve: {
            authorize: ['Auth',
                function (Auth) {
                    return Auth.authorize();
                }
            ]
        }
    });
}

export default AppStateConfig;
