import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoboxlistComponent } from './produtoboxlist.component';

describe('ProdutoboxlistComponent', () => {
  let component: ProdutoboxlistComponent;
  let fixture: ComponentFixture<ProdutoboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
