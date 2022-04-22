import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Livro } from 'src/app/model/livro';
import { environment } from 'src/environments/environment';
import { LivrosService } from './livros.service';

describe('LivroService', () => {
  let service: LivrosService;
  let httpTestingController: HttpTestingController;
  let paramsPage = {page: 0, size: 10};
  let paramsPageString = '?page=0&size=10';
  let expectedContent: Livro[] = [
    {
      id: 1,
      titulo: 'Clean Code',
      sumario: '[Aqui entra o sumario]',
      preco: 100.00,
      numeroPaginas: 398,
      isbn: '985...',
      capa: '../assets/cleanCode.jpg',
      categoriaDTO: {
        id: 1,
        nome: 'Categoria',
        descricao: 'descrição da categoria',
      },
      autorDTO: {
        id: 1,
        nome: 'Uncle Bob',
        email: 'uncle@Blob.com.br',
        descricao: ' descrição aqui',
        dataCriacao: '14/03/2022',
      },
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(LivrosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Deve buscar todos os livros', () => {
    
    service
      .buscarTodosLivros(paramsPage)
      .subscribe((res) => expect(res).toEqual(expectedContent));

    httpTestingController
      .expectOne(environment.API_URL + '/livros'+ paramsPageString)
      .flush(expectedContent);
  });

  
  it('deve buscar livro por autor', async() => {

    service.buscarLivrosPorTituloOuAutor('Uncle Bob', paramsPage).subscribe((response) => {
    expect(response).toBeTruthy();
    expect(response).toEqual(expectedContent)
    });
    const request = httpTestingController.expectOne(environment.API_URL + '/livros/procurar/' + 'Uncle Bob' + paramsPageString)
    request.flush(expectedContent);
    httpTestingController.verify();
    });

  it('deve busca livro por título', async() => {
    
    service.buscarLivrosPorTituloOuAutor('Clean Code',paramsPage).subscribe((response) => { 
        expect(response).toBeTruthy();
        expect(response).toEqual(expectedContent)
    });
    const request = httpTestingController.expectOne(environment.API_URL + '/livros/procurar/' + 'Clean Code'+ paramsPageString)
    request.flush(expectedContent);
    httpTestingController.verify();
  });

  it('deve busca livro por categoria', async() => {
    
    service.buscarLivrosPorCategoria('Categoria',paramsPage).subscribe((response) => { 
        expect(response).toBeTruthy();
        expect(response).toEqual(expectedContent)
    });
    const request = httpTestingController.expectOne(environment.API_URL + '/livros/categorias/' + 'Categoria'+ paramsPageString)
    request.flush(expectedContent);
    httpTestingController.verify();
  });

 
});
