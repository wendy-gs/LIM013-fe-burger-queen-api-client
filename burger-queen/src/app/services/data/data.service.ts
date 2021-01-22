import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductI} from '../../models/product.model';
import { OrderProductI } from '../../models/product.order.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arrayProduct:OrderProductI[]=[];
  //private productSource =new BehaviorSubject<ProductI[]>([]);
  private productSource =new BehaviorSubject<OrderProductI[]>([]);
  currentProduct = this.productSource.asObservable();


  constructor() { }
  
  addProduct(product: ProductI) {
   // const arrayProduct = [product];
    this.arrayProduct.push({...product, priceTotal:product.price, quantity:1})
    this.productSource.next(this.arrayProduct);
  }
  resetOrders(){
    this.arrayProduct=[];
    this.productSource.next([]);
  }
}
