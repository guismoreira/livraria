import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Livro } from 'src/app/model/livro';

import { LivrosComponent } from './livros.component';
import { LivrosService } from '../../services/livros.service';
import { MatPaginator } from '@angular/material/paginator';

describe('LivrosComponent', () => {
  let component: LivrosComponent;
  let fixture: ComponentFixture<LivrosComponent>;

  let livrosMock: Livro[] = [
    {
      id: 1,
      titulo: 'Clean Code',
      sumario: '[Aqui entra o sumario]',
      preco: '100,00',
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
        dataCriacao: '01/02/2022',
      }, 
    },
  ];

  let livrosServiceMock: Partial<LivrosService> = {
    buscarTodosLivros(): Observable<Livro[]> {
      return of(livrosMock);
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivrosComponent,MatPaginator],
      imports: [HttpClientTestingModule],
      providers: [{ provide: LivrosService, useValue: livrosServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar componente de livro', () => {
    expect(component).toBeTruthy();
  });

  it('renderizar  lista de livros', () => {
    const componentDom: HTMLElement = fixture.nativeElement;

    const livroNome = componentDom.querySelector('[data-test="livro-titulo"]')!;
    const livroAutor = componentDom.querySelector('[data-test="livro-autor"]')!;
    const livroCapa = componentDom.querySelector('[data-test="livro-capa"]')!; 
    console.log(livroNome);
    expect(livroNome.textContent).toContain(livrosMock[0].titulo);
    expect(livroAutor.textContent).toContain(livrosMock[0].autorDTO.nome);
    expect(livroCapa.getAttribute('src')).toContain(livrosMock[0].capa);
    
  });
});
