import { Component, OnInit } from '@angular/core';
import { interval, tap, timer } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(5000)
      .pipe(
        tap(() => {
          this.avanzar();
        })
      )
      .subscribe();
  }

  currentIndex: number = 0;

  tarjetas: any[] = [
    {
      nombre: 'Marta de Dalmases',
      cargo: 'Ecosystem, Disruptive and Open Innovation Specialist at Iberia',
      testimonio:
        '“Yo quiero trabajar mientras aprendo. Soy una persona muy pratica y aprendo ensenando a otras personas. LEINN se ajustaba a lo que estaba busando.” ',
      imagenUrl: 'https://i.ibb.co/HHC1sHw/juanita.jpg',
    },
    {
      nombre: 'Íñigo Azcárate',
      cargo: 'Lidera Common Goal España y LATAM',
      testimonio:
        '“LEINN te motiva a atender reuniones, generar conversaciones, crear contactos. Eso me permitio adentrarme en el mundo del futbol.”',
      imagenUrl: 'https://i.ibb.co/VYXRM7x/juan.jpg',
    },
    {
      nombre: 'Nuria Pérez',
      cargo:
        'Lidera la primera feria de empleo creada por jóvenes para jóvenes',
      testimonio:
        '“Queremos poner en contacto pequenos talentos con grandes empresas .” ',
      imagenUrl: 'https://i.ibb.co/z7yGbsN/pedrinia.jpg',
    },
  ];

  mostrarTarjeta(index: number) {
    this.currentIndex = index;
  }

  avanzar() {
    this.currentIndex = (this.currentIndex + 1) % this.tarjetas.length;
  }

  retroceder() {
    this.currentIndex =
      (this.currentIndex - 1 + this.tarjetas.length) % this.tarjetas.length;
  }
}
