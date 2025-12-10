import { Component, Input} from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {

  @Input() product!:Product // recibe un producto desde padre

}
