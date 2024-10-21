import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ModuloComponentesModule } from '../../components/modulo-componentes.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ProductosInicioComponent } from 'src/app/components/productos-inicio/productos-inicio.component';
import { ProductosInicioModule } from 'src/app/components/productos-inicio/productos-inicio.module';
import { ServiciosInicioModule } from 'src/app/components/servicios-inicio/servicios-inicio.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    //importamos el modulo de para los componentes para poder usarlos en los pages
    ModuloComponentesModule,
    SharedModule,
    ProductosInicioModule,
    ServiciosInicioModule,
  ],
  declarations: [InicioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPageModule {}
