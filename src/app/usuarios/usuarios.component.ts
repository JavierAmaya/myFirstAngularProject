import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any = {
    nombre:"Juan",
    apellido:"Perafan"
  };
  
  usuarios: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){

    this.usuarios.push({
      nombre:this.usuario.nombre,
      apellido: this.usuario.apellido
    });
    console.log(this.usuarios);
  }

}
