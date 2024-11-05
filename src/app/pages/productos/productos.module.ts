import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ProductosInicioModule } from 'src/app/components/productos-inicio/productos-inicio.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    ProductosInicioModule,
    SharedModule
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
