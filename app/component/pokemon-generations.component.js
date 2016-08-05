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
var PokemonGenerationsComponent = (function () {
    function PokemonGenerationsComponent(pokemonService, router, route) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.route = route;
    }
    PokemonGenerationsComponent.prototype.ngOnInit = function () {
        this.getPokemonGenerations();
    };
    PokemonGenerationsComponent.prototype.getPokemonGenerations = function () {
        var _this = this;
        this.pokemonService.getPokemonGenerations()
            .subscribe(function (generations) { _this.generations = generations; console.log(generations); }, function (error) { return _this.error = error; });
    };
    PokemonGenerationsComponent.prototype.goToGen = function (gen) {
        //location.go(gen);
    };
    PokemonGenerationsComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-generations',
            templateUrl: 'app/component/views/pokemon-generations.component.html',
            providers: [pokemon_service_1.PokemonService]
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.Router, router_1.ActivatedRoute])
    ], PokemonGenerationsComponent);
    return PokemonGenerationsComponent;
}());
exports.PokemonGenerationsComponent = PokemonGenerationsComponent;
//# sourceMappingURL=pokemon-generations.component.js.map