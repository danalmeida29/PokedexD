import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_API

@Injectable({
  providedIn: 'root'
})


export class pokemonService {

  constructor(private http: HttpClient) { }
  

  getPokemon(id: Number){
    var urlString = `${BASE_URL}/pokemon/${id}`;
    return this.http.get(urlString);
  }

  getType(url: string){
    return this.http.get(url);
  }

  carregarPokemons() {
    var urlString = `${BASE_URL}/pokemon?limit=905&offset=0`;
    return this.http.get(urlString);
  }
}
