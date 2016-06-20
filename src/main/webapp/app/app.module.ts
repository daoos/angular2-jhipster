import './components/common.module';
import './account/account.module';
import './admin/admin.module';
import './entities/entity.module';

import { StateHandler } from './blocks/handlers/state.handler';
import { TranslationHandler } from './blocks/handlers/translation.handler';

import { AlertServiceConfig } from './blocks/config/alert.config';
import { CompileServiceConfig } from './blocks/config/compile.config';
import { HttpConfig } from './blocks/config/http.config';
import { LocalStorageConfig } from './blocks/config/localstorage.config';
import { TranslationConfig } from './blocks/config/translation.config';
import { PagerConfig } from './blocks/config/uib-pager.config';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { AppStateConfig } from './app.state';

import { TranslationStorageProvider } from './blocks/config/translation-storage.provider';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';

angular
    .module('angular2JhipsterApp.app', [
        'ngStorage', 
        'ngResource',
        'ngCookies',
        'ngAria',
        'ngCacheBuster',
        'ngFileUpload',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',
        'ui.router',
        'infinite-scroll',
        'angular-loading-bar',
        // jhipster-needle-angularjs-add-module JHipster will add new module here
        'angular2JhipsterApp.common',
        'angular2JhipsterApp.account',
        'angular2JhipsterApp.admin',
        'angular2JhipsterApp.entity'
    ])
    .config(AlertServiceConfig)
    .config(CompileServiceConfig)
    .config(HttpConfig)
    .config(LocalStorageConfig)
    .config(TranslationConfig)
    .config(PagerConfig)
    .config(PaginationConfig)
    .config(AppStateConfig)
    .factory('TranslationStorageProvider', TranslationStorageProvider)
    .factory('AuthExpiredInterceptor', AuthExpiredInterceptor)
    .factory('ErrorHandlerInterceptor', ErrorHandlerInterceptor)
    .factory('NotificationInterceptor', NotificationInterceptor)
    .run(run);

run.$inject = ['StateHandler'];

function run(StateHandler) {
    StateHandler.initialize();
}
