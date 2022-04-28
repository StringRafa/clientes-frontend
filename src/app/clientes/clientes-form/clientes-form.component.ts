import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service : ClientesService,
    private router : Router,
    private activatedRoute :  ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
   let params = this.activatedRoute.params;
   params.subscribe( urlParams => {
     this.id = urlParams['id'];
     if(this.id){
      this.service.getClienteById(this.id)
      .subscribe( response => this.cliente = response,
        error => this.cliente = new Cliente()
         );
     }
   })
   console.log(this.id);
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.cliente)
        .subscribe( response => {
          this.success = true;
          this.errors = null;
          this.router.navigate(['/clientes/lista']);
        },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }else{
      this.service.salvar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
        this.router.navigate(['/clientes/lista']);
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
      );
    }

  }

  voltarParaListagem(){
    this.router.navigate(['/clientes/lista']);
  }

}
