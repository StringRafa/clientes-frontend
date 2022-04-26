import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURLBase: string = environment.apiURLBase + '/servicos-prestados';

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>( this.apiURLBase, servicoPrestado );
  }
}
