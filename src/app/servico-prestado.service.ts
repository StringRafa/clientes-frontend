import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURLBase: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>( this.apiURLBase, servicoPrestado );
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{

    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ? mes.toString() : '');

    const url = this.apiURLBase + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
