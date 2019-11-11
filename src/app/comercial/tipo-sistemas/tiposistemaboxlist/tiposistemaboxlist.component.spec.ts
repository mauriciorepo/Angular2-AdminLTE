import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposistemaboxlistComponent } from './tiposistemaboxlist.component';

describe('TiposistemaboxlistComponent', () => {
  let component: TiposistemaboxlistComponent;
  let fixture: ComponentFixture<TiposistemaboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposistemaboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposistemaboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
