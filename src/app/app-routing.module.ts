import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { MateriaComponent } from './componentes/materia/materia.component';
import { RegistroAdmComponent } from './componentes/registro-adm/registro-adm.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MateriaAlumComponent } from './componentes/materia-alum/materia-alum.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent}, //, canActivate: [AuthGuard]
  {path: 'registroAdm', component: RegistroAdmComponent}, //, canActivate: [AuthGuard]
  {path: 'materia' , component: MateriaComponent}, //, canActivate: [AuthGuard]
  {path: 'materiaAlum' , component: MateriaAlumComponent}, //, canActivate: [AuthGuard]
  {path: 'usuario' , component: UsuarioComponent}, //, canActivate: [AuthGuard]
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
