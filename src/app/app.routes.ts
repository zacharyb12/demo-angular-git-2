import { Routes } from '@angular/router';
import { SigninComponent } from './signin-component/signin-component';
import { LoginComponent } from './login/login-component/login-component';
import { Homepage } from './homepage/homepage';
import { Maliste } from './maliste/maliste';
import { ProductDetail } from './product-detail/product-detail';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
    {path : '' , component : Homepage},
    {path:'login' , component : LoginComponent},
    {path : 'profile' , component : ProfileComponent},
    {path:'register' , component : SigninComponent},
    {path:'list' , component : Maliste},
    {path : 'details' , component: ProductDetail},

];
