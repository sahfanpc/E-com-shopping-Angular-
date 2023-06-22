import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DescriptionProductComponent } from './description-product/description-product.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ItemGroupComponent } from './item-group/item-group.component';

// import { UpperCasePipe } from '@angular/common';
@NgModule({
  declarations: [
    ProductDetailComponent,
    DescriptionProductComponent,
    CartPageComponent,
    ItemGroupComponent,
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
    MatTabsModule,
    MatDividerModule,
  ],
})
export class ShoppingModuleModule {}
