import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminpageComponent } from './main-adminpage.component';

describe('MainAdminpageComponent', () => {
  let component: MainAdminpageComponent;
  let fixture: ComponentFixture<MainAdminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
