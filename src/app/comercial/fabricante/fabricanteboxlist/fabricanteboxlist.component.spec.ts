import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteboxlistComponent } from './fabricanteboxlist.component';

describe('FabricanteboxlistComponent', () => {
  let component: FabricanteboxlistComponent;
  let fixture: ComponentFixture<FabricanteboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricanteboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricanteboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
