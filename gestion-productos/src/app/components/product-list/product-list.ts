import { Component } from '@angular/core';
import { ProductService, Product} from '../../services/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {

  productos: Product[] = []

  constructor(private productService: ProductService){
    this.productService.cargarProductos().subscribe
      (datos => {
        this.productos = datos;
        console.log('productos recibidos', datos)
      })
  }
}
