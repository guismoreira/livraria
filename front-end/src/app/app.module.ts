import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './components/livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { AppRoutingModule } from './app-routing.module';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DetalhesLivroComponent } from './components/detalhes-livro/detalhes-livro.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { getPortuguesPaginatorIntl } from './utils/ptbr-paginator-intl';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivrosComponent,
    PaginaErroComponent,
    SafeHtmlPipe,
    DetalhesLivroComponent,
    CabecalhoComponent,
    CategoriasComponent,
    PesquisaComponent,
    CarrinhoComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPortuguesPaginatorIntl() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
