import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutolistComponent } from './produtolist.component';

describe('ProdutolistComponent', () => {
  let component: ProdutolistComponent;
  let fixture: ComponentFixture<ProdutolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
