import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListingsComponent } from './listings/listings.component';
import { BookingsComponent } from './bookings/bookings.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PropertyComponent } from './property/property.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', redirectTo: 'home/1', pathMatch: 'full' },

  { path: 'home/:locationId', component: HomeComponent, },
  
  { path: 'signin', component: SigninComponent, },
  
  { path: 'signup', component: SignupComponent, },
  
  { path: 'listings', component: ListingsComponent, },
  
  { path: 'listings/:listFor', component: ListingsComponent, },

  { path: 'listings/:locationId', component: ListingsComponent, },
  
  { path: 'property', component: PropertyComponent, },
  
  { path: 'wishlist', component: WishlistComponent, },
  
  { path: 'bookings', component: BookingsComponent, },
  
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    BookingsComponent,
    WishlistComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
