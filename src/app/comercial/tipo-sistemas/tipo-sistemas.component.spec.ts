import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSistemasComponent } from './tipo-sistemas.component';

describe('TipoSistemasComponent', () => {
  let component: TipoSistemasComponent;
  let fixture: ComponentFixture<TipoSistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
