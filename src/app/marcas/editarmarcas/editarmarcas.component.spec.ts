import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmarcasComponent } from './editarmarcas.component';

describe('EditarmarcasComponent', () => {
  let component: EditarmarcasComponent;
  let fixture: ComponentFixture<EditarmarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
