import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInGameComponent } from './card-in-game.component';

describe('CardInGameComponent', () => {
  let component: CardInGameComponent;
  let fixture: ComponentFixture<CardInGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
