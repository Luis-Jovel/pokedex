"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_routes_1 = require('./routes/app.routes');
var core_2 = require('@angular/core');
var app_component_1 = require('./component/app.component');
core_2.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_routes_1.appRouterProviders,
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: [router_1.ROUTER_DIRECTIVES], multi: true }
]);
//# sourceMappingURL=main.js.map