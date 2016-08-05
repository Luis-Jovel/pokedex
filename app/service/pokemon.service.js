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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var _ = require('lodash');
var utilities_1 = require('./utilities');
var util;
var PokemonService = (function () {
    function PokemonService(http) {
        this.http = http;
        util = new utilities_1.Utilities();
    }
    PokemonService.prototype.getPokemonGenerations = function () {
        return this.http.get('https://pokeapi.co/api/v2/generation')
            .map(function (res) { return _.map(res.json().results, (function (gen) {
            gen.id = gen.name;
            gen.name = gen.name.replace("-", " ");
            return gen;
        })); })
            .catch(this.handleError);
    };
    PokemonService.prototype.getPokemons = function (generation) {
        return this.http.get('https://pokeapi.co/api/v2/generation/' + generation)
            .map(function (res) {
            var pokemons = res.json().pokemon_species;
            pokemons.forEach(function (pokemon) {
                pokemon.id = util.getPokemonIdFromUrl(pokemon.url);
            });
            return _.sortBy(pokemons, 'id');
        })
            .catch(this.handleError);
    };
    PokemonService.prototype.getPokemon = function (id) {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .map(function (res) {
            var pokemon = res.json();
            pokemon.stats = _.sortBy(pokemon.stats, "stat.name");
            pokemon.stats = _.map(pokemon.stats, function (stat) {
                stat.stat.name = stat.stat.name.replace("-", " ");
                return stat;
            });
            return pokemon;
        })
            .catch(this.handleError);
    };
    PokemonService.prototype.getPokemonSpecies = function (id) {
        return this.http.get('https://pokeapi.co/api/v2/pokemon-species/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PokemonService.prototype.getEvolutionChain = function (url) {
        return this.http.get(url)
            .map(function (res) {
            var evolutions = res.json().chain;
            var evolution_chain = [];
            var reading = true;
            while (reading) {
                var pokemon = evolutions.species;
                evolution_chain.push({
                    name: pokemon.name,
                    id: util.getPokemonIdFromUrl(pokemon.url)
                });
                if (evolutions.evolves_to.length > 0)
                    evolutions = evolutions.evolves_to[0];
                else
                    reading = false;
            }
            return evolution_chain;
        })
            .catch(this.handleError);
    };
    PokemonService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PokemonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map