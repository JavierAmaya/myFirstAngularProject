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
      console.log('esto tiene usuarios',this.usuarios);
    });
  }

  guardar(){
    this.httpClient.post(`${this.backendHost}/usuarios`,this.usuario)
    .subscribe((res:any)=>{
      console.log('esto trae res: ',res);
      this.usuarios.push(res.usuarioGuardado);
    });
  }

  eliminar(indice:any){
    console.log(indice);
    this.httpClient.delete(`${this.backendHost}/usuarios/${indice}`)
    .subscribe((res:any)=>{
      console.log(res);
      this.usuarios.splice(indice,1);
    });
  }
}
