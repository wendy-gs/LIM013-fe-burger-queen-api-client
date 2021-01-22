import { Injectable } from '@angular/core';
import { ProductI } from '../../models/product.model' 
import { OrderI } from '../../models/order.model';
import { LoginI } from '../../models/login.model';
import { UserI } from '../../models/user.model';
import { ResponseI } from '../../models/response.model'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //Url donde esta la api
  url: string = 'http://localhost:3001/';
  urlApi: string = 'https://appi-burger-queen-client.herokuapp.com/';

  constructor(private http: HttpClient) {

   }
  //METODO QUE TRAIGA EL LOGIN Y EL TOKEN
  loginByEmail(form: LoginI):Observable<ResponseI>{
    let dir = this.urlApi+'auth';
    return this.http.post<ResponseI>(dir, form);
  }

  //Metodo GET que traiga todos los productos
  getAllProducts(): Observable<ProductI[]> {
    let params = new HttpParams().append('limit', '40');
    let dir = this.urlApi + 'products';
    return this.http.get<ProductI[]>(dir, {params});
  }
  //METODO QUE TRAIGA TODOS LAS ORDENES
  getALLOrders(): Observable<OrderI[]>{
    let params = new HttpParams().append('limit', '40');
    let dir = this.urlApi + 'orders';
    return this.http.get<OrderI[]>(dir, {params});
  }
  //Obtener datos del usuario logeado
  getUser(email: string): Observable<UserI>{
    let dir = this.urlApi +'users/'+ email;
    return this.http.get<UserI>(dir);
  }
  //METODO QUE CREA UNA ORDEN
  createOrder(order: any): Observable<OrderI>{
    let dir = this.urlApi + 'orders/';
    return this.http.post<OrderI>(dir,order);
  }
  //Metodo que modifica la orden de la cocina
  putOrder(id: string, status: string): Observable<OrderI>{
    let dir = this.urlApi + 'orders/'+ id;
    return this.http.put<OrderI>(dir,{status: status});
  }


}
