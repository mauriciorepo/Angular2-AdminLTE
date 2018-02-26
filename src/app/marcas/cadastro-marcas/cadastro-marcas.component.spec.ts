import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMarcasComponent } from './cadastro-marcas.component';

describe('CadastroMarcasComponent', () => {
  let component: CadastroMarcasComponent;
  let fixture: ComponentFixture<CadastroMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
