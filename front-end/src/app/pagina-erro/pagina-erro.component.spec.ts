import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErroComponent } from './pagina-erro.component';

describe('PaginaErroComponent', () => {
  let component: PaginaErroComponent;
  let fixture: ComponentFixture<PaginaErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaErroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar componente de página de erro', () => {
    expect(component).toBeTruthy();
  });
});
