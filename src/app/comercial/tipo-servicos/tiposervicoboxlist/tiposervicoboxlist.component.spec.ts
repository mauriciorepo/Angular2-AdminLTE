import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoboxlistComponent } from './tiposervicoboxlist.component';

describe('TiposervicoboxlistComponent', () => {
  let component: TiposervicoboxlistComponent;
  let fixture: ComponentFixture<TiposervicoboxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposervicoboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicoboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
