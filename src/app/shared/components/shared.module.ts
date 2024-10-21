import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';  

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports:[CommonModule, IonicModule],
  exports:[HeaderComponent, FooterComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

