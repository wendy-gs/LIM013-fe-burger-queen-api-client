import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { OrderI } from '../../models/order.model'

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.sass']
})
export class OrderHistoryComponent implements OnInit {
  orders!: OrderI[];
  ordersDeliver!: OrderI[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getALLOrders().subscribe(data => {
      this.orders=data;
      this.ordersDeliver = this.orders.filter(item =>  item.status === "delivered");
    })
  }

}
