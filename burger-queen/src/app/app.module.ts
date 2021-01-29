import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeWaiterComponent } from './views/home-waiter/home-waiter.component';
import { LoginComponent } from './views/login/login.component';
import { OrdersComponent } from './views/orders/orders.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from  '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavBarWaiterComponent } from './components/nav-bar-waiter/nav-bar-waiter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderComponent } from './components/order/order.component';
import { OrdersProductComponent } from './components/orders-product/orders-product.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';
import { InterceptorService } from './services/api/interceptor.service';
import { OrderHistoryComponent } from './views/order-history/order-history.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeWaiterComponent,
    LoginComponent,
    OrdersComponent,
    FooterComponent,
    CategoriesComponent,
    NavBarWaiterComponent,
    OrderComponent,
    OrdersProductComponent,
    KitchenComponent,
    OrderHistoryComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
