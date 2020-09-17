import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCardsComponent } from './d-cards.component';

describe('DCardsComponent', () => {
  let component: DCardsComponent;
  let fixture: ComponentFixture<DCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
