import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
