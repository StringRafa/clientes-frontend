import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http : HttpClient
  ) { }

  salvar( cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Rafael José de Souza';
    cliente.cpf = '67304687002';
    return cliente;
  }
}
