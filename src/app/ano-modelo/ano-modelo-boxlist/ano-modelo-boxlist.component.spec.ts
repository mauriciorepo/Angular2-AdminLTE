import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoModeloBoxlistComponent } from './ano-modelo-boxlist.component';

describe('AnoModeloBoxlistComponent', () => {
  let component: AnoModeloBoxlistComponent;
  let fixture: ComponentFixture<AnoModeloBoxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnoModeloBoxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoModeloBoxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
