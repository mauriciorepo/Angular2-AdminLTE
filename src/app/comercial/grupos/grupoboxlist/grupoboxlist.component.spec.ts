import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoboxlistComponent } from './grupoboxlist.component';

describe('GrupoboxlistComponent', () => {
  let component: GrupoboxlistComponent;
  let fixture: ComponentFixture<GrupoboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
