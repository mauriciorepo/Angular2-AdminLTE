import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoBoxListComponent } from './servico-box-list.component';

describe('ServicoBoxListComponent', () => {
  let component: ServicoBoxListComponent;
  let fixture: ComponentFixture<ServicoBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
