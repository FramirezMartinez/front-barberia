import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-inicio',
  templateUrl: './productos-inicio.component.html',
  styleUrls: ['./productos-inicio.component.css']
})
export class ProductosInicioComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
  }

}
