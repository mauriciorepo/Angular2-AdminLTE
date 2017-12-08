import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorboxlistComponent } from './fornecedorboxlist.component';

describe('FornecedorboxlistComponent', () => {
  let component: FornecedorboxlistComponent;
  let fixture: ComponentFixture<FornecedorboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
