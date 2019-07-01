import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrotiposervicoComponent } from './cadastrotiposervico.component';

describe('CadastrotiposervicoComponent', () => {
  let component: CadastrotiposervicoComponent;
  let fixture: ComponentFixture<CadastrotiposervicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrotiposervicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrotiposervicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
