import { Component, OnInit } from '@angular/core';
import { ProductI} from '../../models/product.model';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.sass']
})
export class HomeWaiterComponent implements OnInit {
  products!: ProductI[];
   
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    //Aqui obtenemos los productos de la api
    this.api.getAllProducts().subscribe(data => {
      this.products=data;
    })
  }

}
