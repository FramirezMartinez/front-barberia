import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-inicio',
  templateUrl: './servicios-inicio.component.html',
  styleUrls: ['./servicios-inicio.component.css']
})
export class ServiciosInicioComponent implements OnInit {
   servicios = [
    {
      id: 1,
      nombre: 'Corte de cabello',
      precio: 200,
      categoria: 'Corte',
      descripcion: 'Corte de cabello clásico o moderno para hombres.',
      duracion: '30 minutos',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Afeitado',
      precio: 150,
      categoria: 'Afeitado',
      descripcion: 'Afeitado completo con navaja y toalla caliente.',
      duracion: '20 minutos',
      disponible: true
    },
    {
      id: 3,
      nombre: 'Arreglo de barba',
      precio: 100,
      categoria: 'Cuidado de barba',
      descripcion: 'Recorte y arreglo profesional de barba y bigote.',
      duracion: '25 minutos',
      disponible: true
    },
    {
      id: 4,
      nombre: 'Tinte de cabello',
      precio: 350,
      categoria: 'Color',
      descripcion: 'Tinte de cabello para un cambio de estilo.',
      duracion: '45 minutos',
      disponible: false
    },
    {
      id: 5,
      nombre: 'Lavado de cabello',
      precio: 80,
      categoria: 'Cuidado del cabello',
      descripcion: 'Lavado con champú y acondicionador especial.',
      duracion: '15 minutos',
      disponible: true
    },
    {
      id: 6,
      nombre: 'Masaje capilar',
      precio: 120,
      categoria: 'Relajación',
      descripcion: 'Masaje capilar para aliviar el estrés.',
      duracion: '20 minutos',
      disponible: true
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
