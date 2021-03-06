import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { DocumentosListComponent } from './components/documentos-list/documentos-list.component';
import { AngularMaterialModule } from './material.module';
import { BuscaFiisComponent } from './components/busca-fiis/busca-fiis.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/hearder.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteiraComponent,
    DocumentosListComponent,
    BuscaFiisComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
