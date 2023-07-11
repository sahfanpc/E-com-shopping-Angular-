import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DescriptionProductComponent } from './description-product/description-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '',component:ProductDetailComponent},
  { path: 'description-product', component: DescriptionProductComponent }, //description-product
  { path: 'cart-page', component: CartPageComponent },
  { path: 'item-group', component: ItemGroupComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingModuleRoutingModule { }
