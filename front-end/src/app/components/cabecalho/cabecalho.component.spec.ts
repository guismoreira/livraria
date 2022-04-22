import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

import { CabecalhoComponent } from './cabecalho.component';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;
  
  let categoriasMock: Categoria[] = [
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

  let livrosServiceMock: Partial<CategoriaService> = {
    buscarTodasCategorias(): Observable<Categoria[]> {
      return of(categoriasMock);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabecalhoComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatMenuModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: CabecalhoComponent, useValue: livrosServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 


  it('deve criar componente cabeçalho', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o método mostrarTodasCategorias', () => {
    spyOn(component, 'mostrarTodasCategorias');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.mostrarTodasCategorias).toHaveBeenCalled();
    });
  });

  it('deve renderizar o menu categoria', () => {
    spyOn(component, 'mostrarTodasCategorias');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      let componentDom: HTMLElement = fixture.nativeElement;
      let categoria1 = componentDom.querySelector(
        '[data-test = "categoria-nome"]'
      )!;
      expect(categoria1.textContent).toContain(categoriasMock[0].nome);
    });

  });

  it('deve chamar o metodo procurarLivro', (() => {
    spyOn(component, 'procurarLivro');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.procurarLivro).toHaveBeenCalledWith();
    });
  }));  
});