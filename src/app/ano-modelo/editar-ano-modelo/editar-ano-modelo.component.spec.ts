import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnoModeloComponent } from './editar-ano-modelo.component';

describe('EditarAnoModeloComponent', () => {
  let component: EditarAnoModeloComponent;
  let fixture: ComponentFixture<EditarAnoModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAnoModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAnoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
