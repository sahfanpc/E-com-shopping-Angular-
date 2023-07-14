import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';
import { CarouselComponent } from 'angular-responsive-carousel';
import { LoginComponent } from './login/login.component';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '',component: BiodataComponent},
  { path: 'login', component: LoginComponent },
  { path: 'shopping-dashboard', component: ShoppingDashboardComponent },
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailModuleRoutingModule { }
