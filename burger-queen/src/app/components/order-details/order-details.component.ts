import { Component, Input, OnInit } from '@angular/core';
import { OrderI } from '../../models/order.model'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.sass']
})
export class OrderDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
