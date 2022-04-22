import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';

import { CategoriaService } from './categoria.service';
describe('CategoriaService', () => {
  let service: CategoriaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(CategoriaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Deve criar categoria service', () => {
    expect(service).toBeTruthy();
  });

  it('Deve buscar todas as categorias', () => {
    let expectedContent: Categoria[] = [
      {
        id: 1,
        nome: 'categoria 1',
        descricao: 'descricao da categoria 1',
      },
      {
        id: 2,
        nome: 'categoria 2',
        descricao: 'descricao da categoria 2',
      },
    ];
    service
      .buscarTodasCategorias()
      .subscribe((res) => expect(res).toEqual(expectedContent));

    httpTestingController
      .expectOne(environment.API_URL + '/categorias')
      .flush(expectedContent);
  });
});
