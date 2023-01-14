import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { AngularMaterialModule}  from './angular-material/angular-material/angular-material.module'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductCollectionsComponent } from './product-collections/product-collections/product-collections.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './product-collections/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductCollectionsComponent,
    FooterComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // NgSelectModule,
    FormsModule,
    // AngularMaterialModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
