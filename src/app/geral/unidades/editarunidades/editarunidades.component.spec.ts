import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarunidadesComponent } from './editarunidades.component';

describe('EditarunidadesComponent', () => {
  let component: EditarunidadesComponent;
  let fixture: ComponentFixture<EditarunidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarunidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
