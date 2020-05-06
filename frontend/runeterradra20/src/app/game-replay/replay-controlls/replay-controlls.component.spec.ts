import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayControllsComponent } from './replay-controlls.component';

describe('ReplayControllsComponent', () => {
  let component: ReplayControllsComponent;
  let fixture: ComponentFixture<ReplayControllsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplayControllsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayControllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
