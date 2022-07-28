import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { ModalModule } from './Shared/modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//------------------------------------------------------------------------------------------------------------------------------------------------------------ /
import { ListPokemonComponent } from './Pages/list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './Pages/details-pokemon/details-pokemon.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    DetailsPokemonComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
