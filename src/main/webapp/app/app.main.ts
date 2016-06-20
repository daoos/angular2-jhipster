import { upgradeAdapter } from './upgrade_adapter';
import './app.module';

upgradeAdapter.bootstrap(document.body, ['angular2JhipsterApp.app'], {strictDi: true});
