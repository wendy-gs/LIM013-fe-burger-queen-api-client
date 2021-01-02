import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWaiterComponent } from './views/home-waiter/home-waiter.component'
import { LoginComponent } from './views/login/login.component'
import{ OrdersComponent } from './views/orders/orders.component'
const routes: Routes = [
  {
   path: 'home-waiter',
   component: HomeWaiterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
