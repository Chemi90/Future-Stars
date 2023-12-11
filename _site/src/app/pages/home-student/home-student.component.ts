import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss'],
})
export class HomeStudentComponent implements OnInit {
  public chart: any;
  constructor() {}

  nombreProyecto: string = '';
  descripcionProyecto: string = '';
  proyectos: any[] = [];
  fechaCreacion: string = '';

  ngOnInit(): void {}

  datos = [
    { fecha: '2023-10-01', idAplicacion: 'App001' },
    { fecha: '2023-10-05', idAplicacion: 'App002' },
    { fecha: '2023-10-10', idAplicacion: 'App003' },
    // Agrega más datos según sea necesario
  ];

  agregarProyecto() {
    const nuevoProyecto = {
      nombre: this.nombreProyecto,
      descripcion: this.descripcionProyecto,
    };
    this.proyectos.push(nuevoProyecto);
    this.nombreProyecto = '';
    this.descripcionProyecto = '';
  }
}
