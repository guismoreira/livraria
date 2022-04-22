import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Livro } from 'src/app/model/livro';
import { DetalhesLivroService } from 'src/app/services/detalhes-livro-service';

import { DetalhesLivroComponent } from './detalhes-livro.component';

describe('DetalhesLivroComponent', () => {
  let component: DetalhesLivroComponent;
  let fixture: ComponentFixture<DetalhesLivroComponent>;

  let detalhesLivrosMock: Livro = {
    id: 1,
    titulo: 'Clean Code',
    sumario: '[Aqui entra o sumario]',
    preco: '100.00',
    numeroPaginas: 398,
    isbn: '985...',
    capa: '../assets/cleanCode.jpg',
    dataPublicacao: new Date(),
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
      dataCriacao: '01/01/2023',
    },
  };

  let detalhesLivrosServiceMock: Partial<DetalhesLivroService> = {
    find(id: number): Observable<Livro> {
      return of(detalhesLivrosMock);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesLivroComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: DetalhesLivroService, useValue: detalhesLivrosServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar componentes de detalhes de livro', () => {
    expect(component).toBeTruthy();
  });

  it('renderizar componente de detalhes do livro', () => {
    const componentDom: HTMLElement = fixture.nativeElement;

    const livroTitulo = componentDom.querySelector(
      '[data-test = "livro-titulo"]'
    )!;
    const livroAutor = componentDom.querySelector(
      '[data-test = "livro-autor"]'
    )!;
    const livroCapa = componentDom.querySelector('[data-test = "livro-capa"]')!;
    const livroPreco = componentDom.querySelector(
      '[data-test = "livro-preco"]'
    )!;
    const livroPaginas = componentDom.querySelector(
      '[data-test = "livro-numeroPaginas"]'
    )!;
    const livroIsbn = componentDom.querySelector('[data-test = "livro-isbn"]')!;
    const livroDataPublicacao = componentDom.querySelector(
      '[data-test = "livro-dataPublicacao"]'
    )!;
    const autorNome = componentDom.querySelector('[data-test = "autor-nome"]')!;
    const autorContato = componentDom.querySelector(
      '[data-test = "autor-contato"]'
    )!;
    const autorDescricao = componentDom.querySelector(
      '[data-test = "autor-descricao"]'
    )!;

    expect(livroTitulo.textContent).toContain(detalhesLivrosMock.titulo);
    expect(livroAutor.textContent).toContain(detalhesLivrosMock.autorDTO.nome);
    expect(livroCapa.getAttribute('src')).toContain(detalhesLivrosMock.capa);
    expect(livroPreco.textContent).toContain(detalhesLivrosMock.preco);
    expect(livroPaginas.textContent).toContain(
      detalhesLivrosMock.numeroPaginas
    );
    expect(livroIsbn.textContent).toContain(detalhesLivrosMock.isbn);
    expect(livroDataPublicacao.textContent).toContain(
      detalhesLivrosMock.dataPublicacao?.toLocaleDateString('pt-BR')
    );
    expect(autorNome.textContent).toContain(detalhesLivrosMock.autorDTO.nome);
    expect(autorContato.textContent).toContain(
      detalhesLivrosMock.autorDTO.email
    );
    expect(autorDescricao.textContent).toContain(
      detalhesLivrosMock.autorDTO.descricao
    );
  });
});
