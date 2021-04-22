import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './Contador/Contador.module';


@NgModule({
  declarations: [//Agregar mis Componentes
    AppComponent,
  ],
  imports: [//Carpetas de mis Modulos
    HeroesModule,
    BrowserModule,
    ContadorModule
  ],
  providers: [],//servicios especificos a un modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
