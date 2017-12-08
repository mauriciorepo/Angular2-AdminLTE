import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancolistComponent } from './bancolist.component';

describe('BancolistComponent', () => {
  let component: BancolistComponent;
  let fixture: ComponentFixture<BancolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
