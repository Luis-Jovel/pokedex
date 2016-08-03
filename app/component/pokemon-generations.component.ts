import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'pokemon-generations',
	templateUrl: 'app/component/views/pokemon-generations.component.html',
	providers: [PokemonService]
})
export class PokemonGenerationsComponent implements OnInit {
	generations : any;
	error : any;
	constructor(private pokemonService : PokemonService,
		private router : Router,
		private route : ActivatedRoute) {}
	ngOnInit() {
		this.getPokemonGenerations();
	}
	getPokemonGenerations() {
		this.pokemonService.getPokemonGenerations()
			.subscribe(
				generations => { this.generations = generations; console.log(generations) },
				error => this.error = <any>error);
	}
	goToGen(gen : string) {
		//location.go(gen);
	}
}
