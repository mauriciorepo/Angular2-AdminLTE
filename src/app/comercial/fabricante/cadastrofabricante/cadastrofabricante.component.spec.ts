import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrofabricanteComponent } from './cadastrofabricante.component';

describe('CadastrofabricanteComponent', () => {
  let component: CadastrofabricanteComponent;
  let fixture: ComponentFixture<CadastrofabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrofabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrofabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
