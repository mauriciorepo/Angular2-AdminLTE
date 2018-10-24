import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloboxlistComponent } from './modeloboxlist.component';

describe('ModeloboxlistComponent', () => {
  let component: ModeloboxlistComponent;
  let fixture: ComponentFixture<ModeloboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
