import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  poke : Array<PokemonDetailDto> = [];
  selected = false;
  
  getpokemons() {
    return this.poke = this.pokemonService.getPokemons();
  }

  ngOnInit() {
    this.getpokemons();
  }
  
  onSelected(){
  }

}
