import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent implements OnInit {
  livros: Livro[] = [];
  totalElements: number = 0;

  isLoading = true;
  hasBooks = true;

  constructor(private route: ActivatedRoute, private service: LivrosService) {}

  ngOnInit(): void {
    const nome = String(this.route.snapshot.paramMap.get('nome'));
    this.getLivros(nome, { page: '0', size: '10' });
  }
  private getLivros(
    nome: string,
    request: { page: string; size: string }
  ): void {
    this.service
      .buscarLivrosPorTituloOuAutor(nome, request)
      .subscribe((data) => {
        this.isLoading = false;
        this.livros = data['content'];
        this.totalElements = data['totalElements'];
        if (this.livros.length == 0) {
          this.hasBooks = false;
        }
      });
  }
  proximaPagina(event: PageEvent): void {
    const request = {
      page: event.pageIndex.toString(),
      size: event.pageSize.toString(),
    };
    const nome = String(this.route.snapshot.paramMap.get('nome'));

    this.getLivros(nome, request);
  }
}
