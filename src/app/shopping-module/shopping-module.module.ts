import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DescriptionProductComponent } from './description-product/description-product.component';
import { MatBadgeModule } from '@angular/material/badge';
// import { UpperCasePipe } from '@angular/common';
@NgModule({
  declarations: [
    ProductDetailComponent,
    DescriptionProductComponent,
    // UpperCasePipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgForOf,
    AppRoutingModule,
    MatBadgeModule,
  ],
})
export class ShoppingModuleModule {}
