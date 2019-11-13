import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheprodutoComponent } from './detalheproduto.component';

describe('DetalheprodutoComponent', () => {
  let component: DetalheprodutoComponent;
  let fixture: ComponentFixture<DetalheprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
