import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "products", component: ProductsPageComponent
  },
  {
    path: "edit", component: EditProductPageComponent
  },
  {
    path: "edit/:id", component: EditProductPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
