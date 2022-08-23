import {AfterViewInit, ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsModel } from 'src/app/Models/ModelPokemon';
import { pokemonService } from 'src/app/Core/service-pokemon.service'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})

export class ListPokemonComponent implements OnInit {

  @ViewChild('filterInput') filterInput!:  ElementRef
  erro: any;
  pokemons: any;

  pokemonList: PokemonsModel[] = [];
  filteredList: any[] = [];
  constructor(
    private router: Router,
    private pokemonService: pokemonService
  ) { }

  ngOnInit(): void {
    // console.log('test:');
    this.listPokemon();
  }

  listPokemon(){
    this.pokemons = this.pokemonService.carregarPokemons().subscribe(
      (res: any) => {
        this.pokemons = res;
        console.log("Console do res:", this.pokemons);
        for(let i = 0; i <this.pokemons.results.length; i++){
          const pokemon = this.pokemons.results[i];
          this.pokemonList.push({name: pokemon.name, url: pokemon.url, id:i+1 }).toFixed;
        }
        //For percorrendo cada um dos pokemon em pokemons.results
        // dentro do for dar um push em pokemonsList, incluindo no parametro Id o index + 1
        //--  no ngFor do HTML deve percorrer o pokemonList que tem, nome Url e Id para poder pegar a imagem passando o Id

        
        console.log('Console do listPokemon: ', this.pokemonList);
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  filterPokemon(){
    let filterValue = this.filterInput.nativeElement.value
    this.filteredList = this.pokemonList.filter((pokemons: any) =>
    pokemons.name.trim().toLowerCase().includes(filterValue)
    );

    console.log(this.filterInput.nativeElement.value);
  }

  detailsPokemons(id:any){
      localStorage.setItem('PokemonId', id);
    this.onNavigateTo('details')
  }
  

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }
}
