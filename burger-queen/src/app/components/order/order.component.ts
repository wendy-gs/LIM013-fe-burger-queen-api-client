import { Component, OnInit } from '@angular/core';
import { ProductI} from '../../models/product.model';
import { DataService } from '../../services/data/data.service'
import { OrderProductI } from '../../models/product.order.model';
import { ApiService } from '../../services/api/api.service';
import { OrderI } from '../../models/order.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  producstOrder : OrderProductI[]=[];
  order={};
  client:string ="";
  total:number=0
  
  OrderForm = new FormGroup({
    client: new FormControl('', Validators.required),
  })

  constructor(private data: DataService, private api: ApiService) { }

  ngOnInit(): void {
      //Servicio de pasar data entre componentes
    this.data.currentProduct.subscribe(product => (this.producstOrder = product));
    this.api.getUser(sessionStorage.getItem("email")!).subscribe(data =>{
      sessionStorage.setItem("id", data._id);
    })
  }
  // ENVIAR A COCINA
  sendKitchen(){
    let prod: any[] = [];
    for(var i=0 ; i< this.producstOrder.length; i++){
      prod.push({productId: this.producstOrder[i]._id, qty: this.producstOrder[i].quantity})
    }
    this.order = { 
      userId : sessionStorage.getItem("id"),
      client : this.client,
      products: prod
    }
    this.api.createOrder(this.order).subscribe(data => {
      console.log(data);
    });
    this.order = {}
    this.producstOrder = [];
    this.data.resetOrders();
  }
  totalAmount(){
   // Calculate total
   this.total = this.producstOrder.reduce((acc,obj,) => 
   acc + (obj.priceTotal),0);
   return this.total.toFixed(2);
}
}
