import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderProcessComponent } from './order-process/order-process.component';
import { ProductRangComponent } from './product-rang/product-rang.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './New folder/login/login.component';
import { DataComponent } from './New folder/data/data.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'order-process',
    component: OrderProcessComponent
  },
  {
    path: 'product-range',
    component: ProductRangComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:"data",
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"data",
        component:DataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
