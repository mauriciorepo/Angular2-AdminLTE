import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnoModeloComponent } from './cadastro-ano-modelo.component';

describe('CadastroAnoModeloComponent', () => {
  let component: CadastroAnoModeloComponent;
  let fixture: ComponentFixture<CadastroAnoModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAnoModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAnoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
