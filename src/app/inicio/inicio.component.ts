import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public title:string
  constructor() { 
    this.title = 'Bienvenido a Reserva'
  }

  ngOnInit() {
    console.log('Inicio Component Cargado');
    
  }
  

}
