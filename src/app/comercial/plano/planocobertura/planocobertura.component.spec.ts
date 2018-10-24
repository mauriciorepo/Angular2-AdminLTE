import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanocoberturaComponent } from './planocobertura.component';

describe('PlanocoberturaComponent', () => {
  let component: PlanocoberturaComponent;
  let fixture: ComponentFixture<PlanocoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanocoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanocoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
