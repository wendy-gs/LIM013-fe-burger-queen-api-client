import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWaiterComponent } from './home-waiter.component';

describe('HomeWaiterComponent', () => {
  let component: HomeWaiterComponent;
  let fixture: ComponentFixture<HomeWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
