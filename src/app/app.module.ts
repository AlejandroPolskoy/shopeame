import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';
import { FormsModule } from '@angular/forms';
import { GaleryComponent } from './galery/galery.component';
import { CardComponent } from './card/card.component';
import { CapituloComponent } from './capitulo/capitulo.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    EditProductPageComponent,
    GaleryComponent,
    CardComponent,
    CapituloComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
