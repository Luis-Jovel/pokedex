import {Component, OnInit} from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import * as _ from 'lodash';
@Component({
	selector: 'pokemon-list',
	templateUrl: 'app/component/views/pokemon-list.component.html',
	providers: [PokemonService]
})

export class PokemonListComponent implements OnInit{
	pokemons: any;
	error: any;
	constructor(private pokemonService: PokemonService) {}
	ngOnInit() {
		this.getPokemons();
	}
	getPokemons() {
		this.pokemonService.getPokemons()
			.subscribe(
				pokemons => this.pokemons = _.sortBy(pokemons, function(p: {name: string, url: string}) {
					return +p.url.replace(/^.*?pokemon-species\/(\d+)\/$/, "$1");
				}),
				error => this.error = <any>error);
	}
	getIdFromUrl(url: string) : string {
		return url.replace(/^.*?pokemon-species\/(\d+)\/$/, "$1");
	}
}