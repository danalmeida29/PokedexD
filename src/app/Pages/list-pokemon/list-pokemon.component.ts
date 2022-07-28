import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsModel } from 'src/app/Models/ModelPokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})

export class ListPokemonComponent implements OnInit {
  PokemonsModel:any

  pokemons: PokemonsModel[] = [
    { name: 'Bulbasaur', url:'Pk', id:'1'},
    { name: 'Ivysaur', url:'Pk', id:'2'},
    { name: 'Venusaur', url:'Pk', id:'3'},
    { name: 'Charmander', url:'Pk', id:'4'},
    { name: 'Charmelo', url:'Pk', id:'5'},
    { name: 'Charizard', url:'Pk', id:'6'},
    { name: 'Squirtle', url:'Pk', id:'7'},
    { name: 'Wartortle', url:'Pk', id:'8'},
    { name: 'Blastoise', url:'Pk', id:'9'},
  ];
  constructor(private router: Router,) { }

  ngOnInit(): void {
    // this.detailsPokemon();
  }

  detailsPokemon(){
    this.onNavigateTo('details')
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }
}
