import { Component, OnInit, Input } from '@angular/core';
import { OrderProductI } from '../../models/product.order.model';
import { faTrash, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orders-product',
  templateUrl: './orders-product.component.html',
  styleUrls: ['./orders-product.component.sass']
})
export class OrdersProductComponent implements OnInit {
  faTrash = faTrash;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;


 @Input() producstOrder! : OrderProductI[];
 total:number=0;

  constructor() { }

  ngOnInit(): void {
  }

 //BOTON AÑADIR 
  add(position:number, quantity:number, price:number){
    let contador= quantity+1;
    this.producstOrder[position].quantity=contador;
    this.producstOrder[position].priceTotal=this.cal(contador,price);
  }
 //BOTON DISMINUIR
  deduct(position:number, quantity:number, price:number){
    const contador= quantity-1;
    this.producstOrder[position].quantity=contador;
    this.producstOrder[position].priceTotal=this.cal(contador,price);
  }
//CALCULAR PRECIO TOTAL POR ITEM
  cal(price:number, quantity:number){
    let total= price*quantity;
    return total;
  }
//BOTON ELIMINAR
  deleteProductOrder(position:number){
    this.producstOrder.splice(position,1);
    
  }
}
