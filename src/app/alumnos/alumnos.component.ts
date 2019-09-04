import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/alumno';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumno: Alumno = { id: 1, name: 'Ruben Osmar' };

  constructor() { }

  ngOnInit() {
  }

}
