import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfabricanteComponent } from './editarfabricante.component';

describe('EditarfabricanteComponent', () => {
  let component: EditarfabricanteComponent;
  let fixture: ComponentFixture<EditarfabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarfabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarfabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
