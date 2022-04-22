import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Livro } from 'src/app/model/livro';
import { LivrosService } from 'src/app/services/livros.service';

import { CategoriasComponent } from './categorias.component';

describe('CategoriasComponent', () => {
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  let livrosMock: Livro[] = [
    {
      id: 1,
      titulo:
        'Arquitetura de software distribuído: Boas práticas para um mundo de microsserviços',
      sumario: '[Aqui entra o sumario]',
      preco: '100,00',
      numeroPaginas: 138,
      isbn: '978-65-86110-86-9',
      capa: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_large.jpg?v=1634930297',
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
    buscarLivrosPorCategoria(): Observable<Livro[]> {
      return of(livrosMock);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: LivrosService, useValue: livrosServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar categorias componentes', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar o livro filtrado pela categoria', () => {
    component.hasBooks=true;
    component.isLoading=false;
    fixture.detectChanges();
    
    const componentDom = fixture.debugElement.nativeElement;

    const livroNome = componentDom.querySelector('[data-test="livro-titulo"]')!;
    const livroAutor = componentDom.querySelector('[data-test="livro-autor"]')!;
    const livroCapa = componentDom.querySelector('[data-test="livro-capa"]')!;
    console.log(livroNome);

    expect(livroNome.textContent).toContain(livrosMock[0].titulo);
    
    expect(livroAutor.textContent).toContain(livrosMock[0].autorDTO.nome);
    expect(livroCapa.getAttribute('src')).toContain(livrosMock[0].capa);
  });
});
