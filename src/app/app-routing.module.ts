import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
{ path: '', component:HomeComponent},
{ path: 'info', component:InfoComponent},
{ path: 'lista', component:ListaComponent},
{ path: 'login', component:LoginComponent},
{ path: 'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
