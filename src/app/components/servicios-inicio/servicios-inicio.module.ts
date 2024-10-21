import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosInicioComponent } from './servicios-inicio.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [ServiciosInicioComponent],
  exports: [ServiciosInicioComponent]
})
export class ServiciosInicioModule { }
