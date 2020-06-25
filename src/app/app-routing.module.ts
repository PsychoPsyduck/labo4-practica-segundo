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
import { MateriaProfeComponent } from './componentes/materia-profe/materia-profe.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: 'registroAdm', component: RegistroAdmComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: 'materia' , component: MateriaComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: 'materiaAlum' , component: MateriaAlumComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: 'materiaProf' , component: MateriaProfeComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: 'usuario' , component: UsuarioComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: 'alumno' , component: AlumnoComponent, canActivate: [AuthGuard]}, //, canActivate: [AuthGuard]
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
