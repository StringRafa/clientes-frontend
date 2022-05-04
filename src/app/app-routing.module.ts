import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path : '', component: LayoutComponent, children: [
    {path : 'home', component: HomeComponent, canActivate : [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
