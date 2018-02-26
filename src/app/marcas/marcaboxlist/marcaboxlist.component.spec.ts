import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaboxlistComponent } from './marcaboxlist.component';

describe('MarcaboxlistComponent', () => {
  let component: MarcaboxlistComponent;
  let fixture: ComponentFixture<MarcaboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
