import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoBoxListComponent } from './veiculo-box-list.component';

describe('VeiculoBoxListComponent', () => {
  let component: VeiculoBoxListComponent;
  let fixture: ComponentFixture<VeiculoBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
