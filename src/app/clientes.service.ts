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
/*
  getClientes() : Observable<Cliente[]> {
    return null;
  }
  */

  getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Rafael José de Souza";
    cliente.cpf = "12908962080";
    cliente.email = "rafa.jo.souza@hotmail.com";
    cliente.dataCadastro = "20/08/2022";

    let cliente1 = new Cliente();
    cliente1.id = 2;
    cliente1.nome = "Rafael França de Abreu";
    cliente1.cpf = "52040597093";
    cliente1.email = "rafa.franca.abreu@gmail.com";
    cliente1.dataCadastro = "20/08/2022";
    return [cliente, cliente1];
  }
}
