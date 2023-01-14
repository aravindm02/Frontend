import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductCollectionsComponent } from './product-collections/product-collections/product-collections.component';
import { ProductDetailsComponent } from './product-collections/product-details/product-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'jewel', pathMatch: 'full' },
  { path: 'jewel', component: NavBarComponent,data: { title: 'Home'},
  children: [
    { path: '', redirectTo: 'home',pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home'}},
    { path: 'login', component: LoginComponent, data: { title: 'Login'}},
    { path: 'register', component: RegisterComponent,data: { title: 'Register'}},
    { path: 'product-collections', component: ProductCollectionsComponent, data: { title: 'Collections'}},
     { path: 'product-collections/details/:name', component: ProductDetailsComponent, data: { title: 'Details'}}
   ]},
  { path: '**', component: NavBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
