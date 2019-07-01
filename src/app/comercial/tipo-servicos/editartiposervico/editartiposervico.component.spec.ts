import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartiposervicoComponent } from './editartiposervico.component';

describe('EditartiposervicoComponent', () => {
  let component: EditartiposervicoComponent;
  let fixture: ComponentFixture<EditartiposervicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditartiposervicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartiposervicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
