import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmProductoService {

  url = "https://localhost:7153/api/producto"

  constructor(
    private http: HttpClient
  ) { }

  getProductos(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    })
   }

   getProductosParaAsignar(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url+'/asignacion', {
      headers: header
    })
   }

   createProducto(body:any){
     return this.http.post(this.url, body);
   }

   editProductotData(id:number, body: any){
    console.log("Id", id)
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.put(this.url+'/'+id, body)
   }

   deleteProductoData(id:any){

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.delete(this.url+'/'+id)
   }
}
