import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit, AfterViewInit {
  
  //PARA EL BOTON FLOTANTE
  private inicioX = 0;
  private inicioY = 0;
  private offsetX = 0;
  private offsetY = 0;

  // TARMINA

  count = 1;
  presentingElement: any;

  @ViewChild('secondModal', { static: false }) secondModal: IonModal | undefined;

  // SIMULA LOS LOS PRODUCTOS
  productos = [
    {
      id: 1,
      nombre: 'Gel para el cabello',
      precio: 100,
      categoria: 'Estilo',
      descripcion: 'Gel de fijación fuerte para un estilo duradero.',
      cantidad: 10,
      disponible: true
    },
    {
      id: 2,
      nombre: 'Pomada',
      precio: 80,
      categoria: 'Estilo',
      descripcion: 'Pomada para dar brillo y control al cabello.',
      cantidad: 5,
      disponible: true
    },
    {
      id: 3,
      nombre: 'Aceite para barba',
      precio: 150,
      categoria: 'Cuidado personal',
      descripcion: 'Aceite nutritivo para mantener la barba suave y saludable.',
      cantidad: 8,
      disponible: true
    },
    {
      id: 4,
      nombre: 'Champú',
      precio: 120,
      categoria: 'Cuidado personal',
      descripcion: 'Champú especial para cabello masculino.',
      cantidad: 15,
      disponible: true
    },
    {
      id: 5,
      nombre: 'Acondicionador',
      precio: 110,
      categoria: 'Cuidado personal',
      descripcion: 'Acondicionador para un cabello suave y manejable.',
      cantidad: 12,
      disponible: false
    },
    {
      id: 6,
      nombre: 'Cera para cabello',
      precio: 90,
      categoria: 'Estilo',
      descripcion: 'Cera flexible para estilos modernos.',
      cantidad: 20,
      disponible: true
    }
  ];



  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.presentingElement = document.querySelector('ion-router-outlet');
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) this.count--;
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  async openSecondModal() {
    if (this.secondModal) {
      await this.secondModal.present();
    } else {
      console.error("El segundo modal no se ha encontrado");
    }
  }

  closeSecondModal() {
    if (this.secondModal) this.secondModal.dismiss();
  }

// BOTON FLOTANTE
  iniciarMovimiento(event: TouchEvent) {
    const touch = event.touches[0];
    this.inicioX = touch.clientX - this.offsetX;
    this.inicioY = touch.clientY - this.offsetY;
  }

  moverElemento(event: TouchEvent) {
    const touch = event.touches[0];
    this.offsetX = touch.clientX - this.inicioX;
    this.offsetY = touch.clientY - this.inicioY;

    const elemento = event.target as HTMLElement;
    elemento.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px)`;
  }
// TERMINA

}
