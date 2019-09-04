import { Component, OnInit } from '@angular/core'; import { Alumno } from 'src/alumno'; import { ALUMNOS } from '../mock-alumnos';
@Component({ selector: 'app-alumnos', templateUrl: './alumnos.component.html', styleUrls: ['./alumnos.component.css'] })
export class AlumnosComponent implements OnInit {
heroes = ALUMNOS; selectedAlumno: Alumno;
constructor() { }
ngOnInit() { }
onSelect(alumno: Alumno): void { this.selectedAlumno = alumno; }
}