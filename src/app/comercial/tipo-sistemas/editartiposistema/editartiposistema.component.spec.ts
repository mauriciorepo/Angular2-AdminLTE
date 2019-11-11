import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartiposistemaComponent } from './editartiposistema.component';

describe('EditartiposistemaComponent', () => {
  let component: EditartiposistemaComponent;
  let fixture: ComponentFixture<EditartiposistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditartiposistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartiposistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
