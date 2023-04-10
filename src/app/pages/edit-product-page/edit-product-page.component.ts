import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent {
  product:IProduct = {
    id: 0,
    description: '',
    name: '',
    image: '',
    price: 0,
    stars: 0,
  };

  modify = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:any = this.route.snapshot.paramMap.get('id');    
    if(id) {
      this.getProduct( id );
      this.modify = true;
    }
  }

  guardarProducto() {
    if(this.modify) {
      this.productService.modifyProduct( this.product );
    } else {
      this.productService.postProduct( this.product );
    }
    alert( `el producto ${this.product.name} esta guardado` );
  }

  getProduct(id:string) {
    this.productService.getProduct( id ).subscribe( (data:any) => {
      this.product = data;
    });

  }
}
