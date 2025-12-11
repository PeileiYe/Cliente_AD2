import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService,Product } from './services/product';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductFormComponent } from './components/product-form/product-form';


@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-proyecto');

 constructor(private productService: ProductService) {
  this.productService.cargarProductos();
}

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}
