import { bootstrap }    from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http';
import { PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { appRouterProviders } from './routes/app.routes';

import {AppComponent} from './component/app.component'

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	appRouterProviders,
	{provide: PLATFORM_DIRECTIVES, useValue: [ROUTER_DIRECTIVES], multi: true}
]);