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
var router_1 = require('@angular/router');
var pokemon_service_1 = require('../service/pokemon.service');
var pokemon_evolutions_component_1 = require('./pokemon-evolutions.component');
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent(pokemonService, route, router) {
        this.pokemonService = pokemonService;
        this.route = route;
        this.router = router;
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id < 1 || isNaN(+params['id']))
                _this.router.navigate(['/']);
            else {
                _this.loading_pokemon = true;
                _this.loading_species = true;
                _this.getPokemon(_this.id);
                _this.getPokemonSpecies(_this.id);
            }
        });
    };
    PokemonDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PokemonDetailComponent.prototype.getPokemon = function (id) {
        var _this = this;
        this.pokemonService.getPokemon(id)
            .subscribe(function (pokemon) {
            _this.pokemon = pokemon;
            _this.loading_pokemon = false;
        }, function (error) { return _this.error = error; });
    };
    PokemonDetailComponent.prototype.getPokemonSpecies = function (id) {
        var _this = this;
        this.pokemonService.getPokemonSpecies(this.id)
            .subscribe(function (species) {
            _this.species = species;
            _this.loading_species = false;
        }, function (error) { return _this.error = error; });
    };
    PokemonDetailComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-detail',
            templateUrl: 'app/component/views/pokemon-detail.component.html',
            directives: [pokemon_evolutions_component_1.PokemonEvolutionsComponent],
            providers: [pokemon_service_1.PokemonService]
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.ActivatedRoute, router_1.Router])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
exports.PokemonDetailComponent = PokemonDetailComponent;
//# sourceMappingURL=pokemon-detail.component.js.map