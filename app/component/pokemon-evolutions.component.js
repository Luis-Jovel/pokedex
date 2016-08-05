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
var PokemonEvolutionsComponent = (function () {
    function PokemonEvolutionsComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    PokemonEvolutionsComponent.prototype.ngOnInit = function () {
        this.loading_evolution = true;
        this.getEvolutionChain(this.evolution_url);
    };
    PokemonEvolutionsComponent.prototype.getEvolutionChain = function (url) {
        var _this = this;
        this.pokemonService.getEvolutionChain(url)
            .subscribe(function (evolution_chain) {
            _this.evolution_chain = evolution_chain;
            _this.loading_evolution = false;
            console.log(evolution_chain);
        }, function (error) { return _this.error = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PokemonEvolutionsComponent.prototype, "evolution_url", void 0);
    PokemonEvolutionsComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-evolutions',
            templateUrl: 'app/component/views/pokemon-evolutions.component.html',
            providers: [pokemon_service_1.PokemonService]
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], PokemonEvolutionsComponent);
    return PokemonEvolutionsComponent;
}());
exports.PokemonEvolutionsComponent = PokemonEvolutionsComponent;
//# sourceMappingURL=pokemon-evolutions.component.js.map