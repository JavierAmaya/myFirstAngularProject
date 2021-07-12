import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any = {
    nombre:"",
    apellido:"",
    fechaNacimiento: ""
  };

  backendHost:string = 'http://localhost:9999';
  
  usuarios: any = [];

  constructor( private httpClient:HttpClient) { // estamos haciendo una inyeccion

  }


  ngOnInit(): void {
    this.httpClient.get(`${this.backendHost}/usuarios`)
    .subscribe((res) => {
      this.usuarios = res;
      console.log(this.usuarios);
    });
  }

  guardar(){

    this.httpClient.post(`${this.backendHost}/usuarios`,this.usuario)
    .subscribe((res)=>{
      console.log(res);
    });
  }

}
