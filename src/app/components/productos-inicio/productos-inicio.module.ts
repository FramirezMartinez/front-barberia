import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosInicioComponent } from './productos-inicio.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [ProductosInicioComponent],
  exports: [ProductosInicioComponent] 
})
export class ProductosInicioModule {
  
  
 }


