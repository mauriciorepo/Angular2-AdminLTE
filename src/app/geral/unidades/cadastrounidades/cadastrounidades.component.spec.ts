import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrounidadesComponent } from './cadastrounidades.component';

describe('CadastrounidadesComponent', () => {
  let component: CadastrounidadesComponent;
  let fixture: ComponentFixture<CadastrounidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrounidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrounidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
