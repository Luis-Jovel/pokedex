"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_service_1 = require('../service/pokemon.service');
var router_1 = require('@angular/router');
var pokemon_generations_component_1 = require('./pokemon-generations.component');
var PokemonListComponent = (function () {
    function PokemonListComponent(pokemonService, route, router) {
        this.pokemonService = pokemonService;
        this.route = route;
        this.router = router;
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.generation = params["generation"] ? params["generation"] : "generation-i";
            _this.loading = true;
            _this.getPokemons(_this.generation);
        });
    };
    PokemonListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PokemonListComponent.prototype.getPokemons = function (generation) {
        var _this = this;
        this.pokemonService.getPokemons(generation)
            .subscribe(function (pokemons) {
            _this.pokemons = pokemons;
            _this.loading = false;
        }, function (error) { return _this.error = error; });
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-list',
            templateUrl: 'app/component/views/pokemon-list.component.html',
            directives: [pokemon_generations_component_1.PokemonGenerationsComponent],
            providers: [pokemon_service_1.PokemonService]
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.ActivatedRoute, router_1.Router])
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemon-list.component.js.map