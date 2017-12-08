import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoeditComponent } from './bancoedit.component';

describe('BancoeditComponent', () => {
  let component: BancoeditComponent;
  let fixture: ComponentFixture<BancoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
