import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDashboardComponent } from './shopping-dashboard.component';

describe('ShoppingDashboardComponent', () => {
  let component: ShoppingDashboardComponent;
  let fixture: ComponentFixture<ShoppingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingDashboardComponent]
    });
    fixture = TestBed.createComponent(ShoppingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
