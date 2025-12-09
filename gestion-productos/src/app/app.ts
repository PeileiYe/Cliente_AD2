import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService,Product } from './services/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-proyecto');

  constructor(private productService: ProductService){
    this.productService.cargarProductos().subscribe(

      (datos: Product[]) => {
        console.log('productos cargados de API', datos)
      })
  }
}
