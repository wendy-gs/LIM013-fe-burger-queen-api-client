import { Component, OnInit, NgModule } from '@angular/core';
import { faUtensils, faHamburger, faGlassWhiskey, faIceCream } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../services/api/api.service';
import { ProductI} from '../../models/product.model';
import { DataService } from '../../services/data/data.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  faUtensils = faUtensils;
  faHamburger = faHamburger;
  faGlassWhiskey = faGlassWhiskey;
  faIceCream = faIceCream;

  products!: ProductI[];
  productCategory!: ProductI[];

  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit(): void {
      //Aqui obtenemos los productos de la api
      this.api.getAllProducts().subscribe(data => {
        this.products=data;
        this .productCategory = this.products;
        console.log(this.productCategory);
      })

      //Servicio de pasar data entre componentes
     // this.data.currentProduct.subscribe(product => (this.name = product.name));

  }
  onCategories(category: string){
    if(category ==="Menu"){
      this .productCategory = this.products;
    } else {
     this.productCategory = this.products.filter(item => category === item.type);
    }
  }
  selectProduct(product:ProductI){
    this.data.addProduct(product);
  }
}
