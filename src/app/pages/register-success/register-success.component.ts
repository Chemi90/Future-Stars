import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss'],
})
export class RegisterSuccessComponent {
  constructor(private router: Router) {}
  mostrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById('ventanaEmergente') as any;
    ventanaEmergente.style.display = 'flex';

    // Generar confeti
    this.generarConfeti();
  }

  // Función para generar confeti
  generarConfeti() {
    var confetiContainer = document.getElementById('confetiContainer') as any;

    for (let i = 0; i < 100; i++) {
      var confeti = document.createElement('div');
      confeti.className = 'confeti';
      confeti.style.left = Math.random() * window.innerWidth + 'px';
      confeti.style.animationDelay = Math.random() + 's';
      confetiContainer.appendChild(confeti);
    }
  }

  goHome() {
    this.router.navigate(['/home-student']);
  }
}
