import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmProductoComponent } from './components/forms/addm-producto/addm-producto.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
 {path:'Masivo', component: AddmProductoComponent},
 {path:'Menu', component: ProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
