import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrotiposistemaComponent } from './cadastrotiposistema.component';

describe('CadastrotiposistemaComponent', () => {
  let component: CadastrotiposistemaComponent;
  let fixture: ComponentFixture<CadastrotiposistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrotiposistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrotiposistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
