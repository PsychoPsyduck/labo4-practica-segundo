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
import { ExamenComponent } from './componentes/examen/examen.component';
import { ActasDeExamenComponent } from './componentes/actas-de-examen/actas-de-examen.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'home', component: HomeComponent}, //, canActivate: [AuthGuard]
  {path: 'registroAdm', component: RegistroAdmComponent}, //, canActivate: [AuthGuard]
  {path: 'materia' , component: MateriaComponent}, //, canActivate: [AuthGuard]
  {path: 'materiaAlum' , component: MateriaAlumComponent}, //, canActivate: [AuthGuard]
  {path: 'materiaProf' , component: MateriaProfeComponent}, //, canActivate: [AuthGuard]
  {path: 'usuario' , component: UsuarioComponent}, //, canActivate: [AuthGuard]
  {path: 'alumno' , component: AlumnoComponent}, //, canActivate: [AuthGuard]
  {path: 'examen' , component: ExamenComponent}, //, canActivate: [AuthGuard]
  {path: 'actas' , component: ActasDeExamenComponent}, //, canActivate: [AuthGuard]
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
