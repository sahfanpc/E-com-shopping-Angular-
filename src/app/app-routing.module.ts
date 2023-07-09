import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './detail-module/login/login.component';
import { ShoppingDashboardComponent } from './detail-module/shopping-dashboard/shopping-dashboard.component';
import { ProductDetailComponent } from './shopping-module/product-detail/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { DescriptionProductComponent } from './shopping-module/description-product/description-product.component';
import { CartPageComponent } from './shopping-module/cart-page/cart-page.component';
import { ItemGroupComponent } from './shopping-module/item-group/item-group.component';
import { OrderConfirmationComponent } from './shopping-module/order-confirmation/order-confirmation.component';
import { OrderComponent } from './shopping-module/order/order.component';
import { AdminComponent } from './detail-module/admin/admin.component';
import { BiodataComponent } from './detail-module/biodata/biodata.component';
import { CarouselComponent } from 'angular-responsive-carousel';
import { CardsComponent } from './detail-module/cards/cards.component';
import { MapComponent } from './detail-module/map/map.component';
// import { CarouselComponent } from './shopping-module/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: BiodataComponent },
  {path:'map',component:MapComponent},
  { path: 'login', component: LoginComponent },
  { path: 'shopping-dashboard', component: ShoppingDashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'product-detail', component: ProductDetailComponent }, //product-detail
  { path: 'description-product', component: DescriptionProductComponent }, //description-product
  { path: 'cart-page', component: CartPageComponent },
  { path: 'item-group', component: ItemGroupComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'order', component: OrderComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'card', component: CardsComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
