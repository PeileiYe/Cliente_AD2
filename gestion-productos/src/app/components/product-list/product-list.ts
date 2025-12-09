import { Component } from '@angular/core';
import { ProductService, Product} from '../../services/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productos: Product[] = []

  constructor(private productService: ProductService){
    this.productService.cargarProductos().subscribe
      (datos => {
        this.productos = datos;
        console.log('productos recibidos', datos)
      })
  }
}
