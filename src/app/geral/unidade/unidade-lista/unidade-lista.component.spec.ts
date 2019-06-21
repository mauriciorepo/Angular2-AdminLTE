import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeListaComponent } from './unidade-lista.component';

describe('UnidadeListaComponent', () => {
  let component: UnidadeListaComponent;
  let fixture: ComponentFixture<UnidadeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
