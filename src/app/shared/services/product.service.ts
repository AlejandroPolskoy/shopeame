import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get( this.url );
  }

  getProduct( id:string ) {
    return this.http.get(this.url + id);
  }

  postProduct( product: IProduct ) {
    return this.http.post(this.url, product).subscribe();
  }

  modifyProduct( product: IProduct ) {
    return this.http.put(this.url + product.id, product).subscribe();
  }

  deleteProduct( id:number ) {
    return this.http.delete(this.url + id).subscribe();
  }
}
