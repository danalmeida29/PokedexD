import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsModel } from 'src/app/Models/ModelPokemon';
import { pokemonService } from 'src/app/Core/service-pokemon.service'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})

export class ListPokemonComponent implements OnInit {

  erro!: Error;
  pokemons: any;

  pokemonList: PokemonsModel[] = [];
  filteredList: any[] = [];
  constructor(
    private router: Router,
    private pokemonService: pokemonService
  ) { }


  ngOnInit(): void {
    this.listPokemon();
  }



  listPokemon(){
    this.pokemons = this.pokemonService.carregarPokemons().subscribe(
      (res: any) => {
        this.pokemons = res;
        for(let i = 0; i <this.pokemons.results.length; i++){
          const pokemon = this.pokemons.results[i];
          this.pokemonList.push({name: pokemon.name, url: pokemon.url, id:i+1 }).toFixed;
        }

        this.filteredList = this.pokemonList;
      },
      (error: Error) => {
        this.erro = error;
      }
    );
  }

  filterPokemon(event: Event){
    let filterValue = (event.target as HTMLInputElement).value
    this.filteredList = this.pokemonList.filter((pokemon: any) =>
    pokemon.name.trim().toLowerCase().includes(filterValue)
    )
  }

  detailsPokemons(id:any){
      localStorage.setItem('PokemonId', id);
    this.onNavigateTo('details')
  }
  

  onNavigateTo(pageName: String) {
    this.router.navigate([`/${pageName}`]);
  }
}
