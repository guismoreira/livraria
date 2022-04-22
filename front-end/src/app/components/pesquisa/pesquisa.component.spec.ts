import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { PesquisaComponent } from './pesquisa.component';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatMenuModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar componente de pesquisa', () => {
    expect(component).toBeTruthy();
  });
});
