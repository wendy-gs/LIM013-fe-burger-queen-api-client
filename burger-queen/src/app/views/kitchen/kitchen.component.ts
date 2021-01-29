import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { OrderI } from '../../models/order.model';
import { interval, timer, TimeInterval} from 'rxjs'



@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent implements OnInit {

  orders!: OrderI[];
  ordersDay!: OrderI[];
  HorActual !:any;
  minutes!: any;

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
     
      const timeActual = interval(1000);
      timeActual.subscribe((n) => {
      var fechaHora = new Date();
      this.ordersDay.forEach(element => {
        var mydate = new Date(element.dateEntry) ///pasa del formato unversal a una local
        let milisegundos= Math.round(fechaHora.getTime() - mydate.getTime());
        let min =  Math.trunc(milisegundos/(1000*60));
        let seg = (Math.trunc((milisegundos / 1000) - (element.min * 60)) < 0) ? 0 : (Math.trunc((milisegundos / 1000) - (min * 60)));
        element.min=min;
        element.seg = seg;
       
      });
      })
      
    })
  }

}