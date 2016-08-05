"use strict";
var router_1 = require('@angular/router');
var pokemon_detail_component_1 = require('../component/pokemon-detail.component');
var pokemon_list_component_1 = require('../component/pokemon-list.component');
var routes = [
    { path: '', component: pokemon_list_component_1.PokemonListComponent },
    { path: ':generation', component: pokemon_list_component_1.PokemonListComponent },
    { path: 'pokemon', component: pokemon_list_component_1.PokemonListComponent },
    { path: 'pokemon/:id', component: pokemon_detail_component_1.PokemonDetailComponent },
    { path: '**', component: pokemon_list_component_1.PokemonListComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map