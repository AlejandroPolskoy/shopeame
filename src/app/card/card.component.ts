import { Component, Input } from '@angular/core';
import { IProduct } from 'src/interfaces/product.interface';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product:IProduct = {
    id: 0,
    description: '',
    name: '',
    image: '',
    price: 0,
    stars: 0,
  };
  @Input() preview:boolean = false;

  constructor(private router: Router, private productService: ProductService) {}

  editar() {
    this.router.navigate(['/editar', { id: this.product.id}]);
  }

  borrar( id:number ) {
    if(confirm(`Seguro que quieres borrar ${this.product.name}?`)) {
      this.productService.deleteProduct( id );
      location.reload();
    }
  }
}
