import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscaFiisComponent } from './components/busca-fiis/busca-fiis.component';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { DocumentosListComponent } from './components/documentos-list/documentos-list.component';

const routes: Routes = [
  { path: 'carteira/:userId', component: CarteiraComponent },
  { path: 'fiis/:code', component: DocumentosListComponent },
  { path: 'buscar', component: BuscaFiisComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
