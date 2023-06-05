import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './detail-module/login/login.component';
import { ShoppingDashboardComponent } from './detail-module/shopping-dashboard/shopping-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'shopping-dashboard', component: ShoppingDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
