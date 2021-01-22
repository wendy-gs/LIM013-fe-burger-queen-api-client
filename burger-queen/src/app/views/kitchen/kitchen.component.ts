import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { OrderI } from '../../models/order.model';



@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent implements OnInit {

  orders!: OrderI[];
  ordersDay!: OrderI[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.bringOrders();
  }

  orderList(id: string, status:string){
    this.api.putOrder(id, status).subscribe(data => {
      console.log(data);
      this.bringOrders();
    })
  }
  //Metodo traer ordernes
  bringOrders(){
    this.api.getALLOrders().subscribe(data => {
      this.orders=data;
      this.ordersDay = this.orders.filter(item =>  item.status === "pending");
    })
  } 
}