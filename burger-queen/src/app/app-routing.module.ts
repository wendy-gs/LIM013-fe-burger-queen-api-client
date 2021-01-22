import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWaiterComponent } from './views/home-waiter/home-waiter.component';
import { LoginComponent } from './views/login/login.component';
import{ OrdersComponent } from './views/orders/orders.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';
import { OrderHistoryComponent } from './views/order-history/order-history.component'
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
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'history',
    component: OrderHistoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
