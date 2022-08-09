import { Component, OnInit } from '@angular/core';
import { pokemonService } from 'src/app/Core/service-pokemon.service';
import { TypeColorModel } from 'src/app/Models/ModelTypeColor';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent implements OnInit {
  namePokemon: any;
  idPokemon: any;

  Erro: any;
  corPorTipo: any;

  personagensPokemon:any;
  typePokemon:any;

  typeColor: TypeColorModel[] = [];
  typeDamage: any;

  damageColor: TypeColorModel[] = [];
  damageToColor: TypeColorModel[] = [];
  constructor(
    private servicePokemon: pokemonService,
  ) { }

  ngOnInit(): void {
    this.idPokemon = localStorage.getItem('PokemonId');
    this.getPokemon();
    this.getType();
  }


  getType() {
    this.servicePokemon.getType(this.idPokemon).subscribe(
      (res:any)=>{
        this.typePokemon = res;
        
        console.log(this.typePokemon);

        this.relationDamage(this.typePokemon.damage_relations.double_damage_from, this.damageColor)

        // for (let index = 0; index < this.typePokemon.damage_relations.double_damage_from.length; index++) {
        //   const element = this.typePokemon.damage_relations.double_damage_from[index];
    
        //   this.validatingColorByType(element.name);
          
        //   this.damageColor.push({type: element.name ,color: this.corPorTipo}).toFixed;
        //   console.log("O que há de novo scooby-Doo?", this.damageColor);
        // }

        // for (let index = 0; index < this.typePokemon.damage_relations.double_damage_to.length; index++) {
        //   const element = this.typePokemon.damage_relations.double_damage_to[index];

        //   this.validatingColorByType(element.name);
          
        //   this.damageToColor.push({type: element.name ,color: this.corPorTipo}).toFixed;
        // }
      },
      (error: any) => {
        this.Erro = error;
      }
    );
  }

  getPokemon(){
    this.servicePokemon.getPokemon(this.idPokemon).subscribe(
      (res:any)=>
    {
      this.personagensPokemon = res;

      console.log(res);

      for (let index = 0; index < this.personagensPokemon.types.length; index++) {
        const element = this.personagensPokemon.types[index];

        this.validatingColorByType(element.type.name);

        this.typeColor.push({type: element.type.name ,color: this.corPorTipo}).toFixed;
      }
    },
    (error: any) => {
      this.Erro = error;
    });
  }

  /**
   * metodo que atribui a cor de acordo com o tipo passado como parametro
   * @param tipo [String] : parametro que define os tipos dos pokemons.
   */
  validatingColorByType(tipo: string){
    switch (tipo) {

      case "bug":
        this.corPorTipo = "#9BBA48;" 
      break; 

      case "drak":
        this.corPorTipo = "#595761;;"
      break; 

      case "dragon":
        this.corPorTipo = "#2C6AC1;"
      break; 

      case "eletric":
        this.corPorTipo = "#D4BC34;"
      break; 

      case "fighting":
        this.corPorTipo = "#C44D61;"
      break; 

      case "flying":
        this.corPorTipo = "#758CBD;"
      break;

      case "fire":
        this.corPorTipo = "#E96303;"
      break; 

      case "fairy":
        this.corPorTipo = "#E296E1;"
      break; 

      case "grass":
        this.corPorTipo = "#73B861;"
      break;

      case "ground":
        this.corPorTipo = "#CE8056;"
      break;

      case "ghost":
        this.corPorTipo = "#616EB7;"
      break;

      case "ice":
        this.corPorTipo = "#71BAAC;"
      break;

      case "normal":
        this.corPorTipo = "#909090;"
      break;

      case "poison":
        this.corPorTipo = "#AC6ACA;"
      break;  

      case "psychic":
        this.corPorTipo = "#EB8B85;"
      break; 

      case "rock":
        this.corPorTipo = "#84BEB3;"
      break;  

      case "rock":
        this.corPorTipo = "#6594A1;"
      break; 

      case "water":
        this.corPorTipo = "#4F77BE;"
      break; 

      default:
        this.corPorTipo = "gray"
      break;
    }
  }

  relationDamage(verificador: Array<any>, recebido: Array<any>) {
    for (let index = 0; index < verificador.length; index++) {
      const element = this.typePokemon.damage_relations.double_damage_from[index];

      this.validatingColorByType(element.name);
      
      recebido.push({type: element.name ,color: this.corPorTipo}).toFixed;

      console.log("O que há de novo scooby-Doo?", this.damageColor);
    };

    for (let index = 0; index < verificador.length; index++) {
      const element = this.typePokemon.damage_relations.double_damage_to[index];

      this.validatingColorByType(element.name);
      
      this.damageToColor.push({type: element.name ,color: this.corPorTipo}).toFixed;
    }
  }
  

}
