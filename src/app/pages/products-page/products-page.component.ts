import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products:any = [];

  ngOnInit(): void {
    // description
    // id
    // image
    // name
    // price
    // stars
    this.productService.getProductos().subscribe( (data: any)=> {
      this.products = data;
    });
  }
}
