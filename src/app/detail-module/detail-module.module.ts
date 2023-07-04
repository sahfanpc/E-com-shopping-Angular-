import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AdminComponent } from './admin/admin.component';
import { BiodataComponent } from './biodata/biodata.component';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [LoginComponent, ShoppingDashboardComponent, AdminComponent, BiodataComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterLink,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule
  ],
  exports: [ShoppingDashboardComponent],
})
export class DetailModuleModule {}
