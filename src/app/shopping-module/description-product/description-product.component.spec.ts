import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProductComponent } from './description-product.component';

describe('DescriptionProductComponent', () => {
  let component: DescriptionProductComponent;
  let fixture: ComponentFixture<DescriptionProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionProductComponent]
    });
    fixture = TestBed.createComponent(DescriptionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
