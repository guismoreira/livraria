import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DetalhesLivroComponent } from './components/detalhes-livro/detalhes-livro.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { HomeComponent } from './home/home.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro/:id', component: DetalhesLivroComponent },
  { path: 'categoria/:nome', component: CategoriasComponent },
  { path: 'pesquisa/:nome', component: PesquisaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '**', component: PaginaErroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
