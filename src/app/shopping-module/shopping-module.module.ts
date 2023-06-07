import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [ProductDetailComponent, CarouselComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatStepperModule],
})
export class ShoppingModuleModule {}
