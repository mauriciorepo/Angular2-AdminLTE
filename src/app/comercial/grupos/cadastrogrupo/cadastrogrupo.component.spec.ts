import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrogrupoComponent } from './cadastrogrupo.component';

describe('CadastrogrupoComponent', () => {
  let component: CadastrogrupoComponent;
  let fixture: ComponentFixture<CadastrogrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrogrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrogrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
