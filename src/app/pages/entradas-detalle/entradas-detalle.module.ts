import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradasDetallePageRoutingModule } from './entradas-detalle-routing.module';

import { EntradasDetallePage } from './entradas-detalle.page';
import { ModuloComponentesModule } from '../../components/modulo-componentes.module';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradasDetallePageRoutingModule,
    ModuloComponentesModule,
    SharedModule
  ],
  declarations: [EntradasDetallePage]
})
export class EntradasDetallePageModule {}
