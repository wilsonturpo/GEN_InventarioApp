import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISeccion } from 'src/app/Modelos/ISeccion';
import { IMedida } from 'src/app/Modelos/IMedida';

@Injectable({
  providedIn: 'root'
})
export class AdmMaestroService {


  url = "http://localhost:5225/api/"

  constructor(
    private http: HttpClient
  ) { }


  //Obtener secciones
  getSecciones(): Observable<ISeccion[]> {
    return this.http.get<ISeccion[]>(`${this.url}seccion`);
  }


  /*
    CRUD DE MEDIDAS
  */

  //Obtener medidas
  getMedidas(): Observable<IMedida[]> {
    return this.http.get<IMedida[]>(`${this.url}medida`);
  }

  //Agregar medida

  agregarMedida(medida: IMedida) {
    return this.http.post(`${this.url}medida/post`, medida);
}

  getMaestroDatos(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    })
   }

   createMaestroData(body:any){
     return this.http.post(this.url, body);
   }

   getMaestroscategorias(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url+'/categorias', {
      headers: header
    })
   }

   GetMaxCode(categoria: any){
    let header = new HttpHeaders()
    .set('Type-content', 'text')

    return this.http.get(this.url+'/codigoMaxDeCategoria?categoria='+categoria, {
      headers: header,
      responseType: 'text'
    })
   }

   editMaestroData(id:any, body: any){

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.put(this.url+'/'+id, body)
   }

   deleteMaestroData(id:any){

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.delete(this.url+'/'+id)
   }


   ///Productos

   getAreaUso(categoria:any){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url+'/areaUso?categoria='+categoria, {
      headers: header
    })
   }
}

