import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
//export class GaleryComponent {
  @Input() products:any = [];
  productList:any;
  find:string = "";
  //products:any = [];
  // constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }

  buscar() {
    if(!this.productList) this.productList = [...this.products];

    if(this.find !== "") {
      this.products = this.productList.filter(( item:any )=> item.name.toLowerCase().includes( this.find.toLowerCase() ))
    } else {
      this.products = this.productList
    }
  }
}
