import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Livro } from 'src/app/model/livro';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];
  totalElements: number = 0;

  constructor(private service: LivrosService) { }

  ngOnInit(): void {
    this.getLivros({ page: '0', size: '10' });
  }

  private getLivros(request: { page: string; size: string; }): void {
    this.service.buscarTodosLivros(request).subscribe(
      (data) => {
        this.livros = data['content'];
        this.totalElements = data['totalElements'];
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  proximaPagina(event: PageEvent): void {
    const request = { page: event.pageIndex.toString(), size: event.pageSize.toString() }
    this.getLivros(request);
  }
}