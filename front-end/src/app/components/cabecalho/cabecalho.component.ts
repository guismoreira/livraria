import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  categorias: Categoria[] = [];
  procurar: string = '';

  constructor(
    private service: CategoriaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarTodasCategorias();
  }

  mostrarTodasCategorias(): void {
    this.service
      .buscarTodasCategorias()
      .subscribe((categorias) => (this.categorias = categorias));
  }

  searchForm = this.formBuilder.group({
    livro: '',
  });

  procurarLivro(): void {
    let nome = this.searchForm.value.livro.trim();
    if (nome == '' || nome == null || nome.length < 3) {
      this.router.navigateByUrl('');
    } else {
      this.router.navigate(['/pesquisa', nome]);
    }
  }
}
