import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailModuleModule } from './detail-module/detail-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingModuleModule } from './shopping-module/shopping-module.module';
// import { UppercasePipe } from './uppercase.pipe';
// import { IvyCarouselModule } from 'angular-responsive-carousel2';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    // ShoppingModuleModule,

    // IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
