import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmUtilitarioService {

  url = "https://localhost:7153/api/utilitario"

  constructor(
    private http: HttpClient
  ) { }

  getAsignaciones(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    })
   }

  createUtilitarioData(body:any){

    return this.http.post(this.url, body);
  }
}
