import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesboxlistComponent } from './unidadesboxlist.component';

describe('UnidadesboxlistComponent', () => {
  let component: UnidadesboxlistComponent;
  let fixture: ComponentFixture<UnidadesboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
