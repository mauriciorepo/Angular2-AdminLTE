import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVeiculoComponent } from './detalhe-veiculo.component';

describe('DetalheVeiculoComponent', () => {
  let component: DetalheVeiculoComponent;
  let fixture: ComponentFixture<DetalheVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
