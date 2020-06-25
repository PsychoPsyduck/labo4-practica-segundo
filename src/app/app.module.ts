import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { environment } from '../environments/environment';
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp(environment.firebaseConfig);

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { environment } from '../environments/environment';

import { MaterialComponent } from './componentes/material/material.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { MateriaComponent } from './componentes/materia/materia.component';
import { ListadoMateriasComponent } from './componentes/materia/listado-materias/listado-materias.component';
import { AltaMateriaComponent } from './componentes/materia/alta-materia/alta-materia.component';
import { RegistroAdmComponent } from './componentes/registro-adm/registro-adm.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ListadoUsuarioComponent } from './componentes/usuario/listado-usuario/listado-usuario.component';
import { MateriaAlumComponent } from './componentes/materia-alum/materia-alum.component';
import { AltaMateriaAlumComponent } from './componentes/materia-alum/alta-materia-alum/alta-materia-alum.component';
import { ListadoMateriaAlumComponent } from './componentes/materia-alum/listado-materia-alum/listado-materia-alum.component';
import { NotaPipe } from './pipes/nota.pipe';
import { ColorCupoDirective } from './directiva/color-cupo.directive';
import { MateriaProfeComponent } from './componentes/materia-profe/materia-profe.component';
import { ListadoMateriaProfeComponent } from './componentes/materia-profe/listado-materia-profe/listado-materia-profe.component';
import { DetalleMateriaProfeComponent } from './componentes/materia-profe/detalle-materia-profe/detalle-materia-profe.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListadoAlumnoComponent } from './componentes/alumno/listado-alumno/listado-alumno.component';
import { DetalleAlumnoComponent } from './componentes/alumno/detalle-alumno/detalle-alumno.component';
import { ListadoAlumnoBorradoComponent } from './componentes/alumno/listado-alumno-borrado/listado-alumno-borrado.component';
import { UsuarioLogDirective } from './directiva/usuario-log.directive';
import { ExamenComponent } from './componentes/examen/examen.component';
import { ListaExamenComponent } from './componentes/examen/lista-examen/lista-examen.component';
import { AltaExamenComponent } from './componentes/examen/alta-examen/alta-examen.component';
import { ActasDeExamenComponent } from './componentes/actas-de-examen/actas-de-examen.component';
import { ListadoDeAsignaturasComponent } from './componentes/actas-de-examen/listado-de-asignaturas/listado-de-asignaturas.component';
import { ListadoDeAprobacionDirectaComponent } from './componentes/actas-de-examen/listado-de-aprobacion-directa/listado-de-aprobacion-directa.component';
import { ListadoNoDirectaComponent } from './componentes/actas-de-examen/listado-no-directa/listado-no-directa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CabeceraComponent,
    FooterComponent,
    HomeComponent,
    MateriaComponent,
    ListadoMateriasComponent,
    AltaMateriaComponent,
    RegistroAdmComponent,
    UsuarioComponent,
    ListadoUsuarioComponent,
    MateriaAlumComponent,
    AltaMateriaAlumComponent,
    ListadoMateriaAlumComponent,
    NotaPipe,
    ColorCupoDirective,
    MateriaProfeComponent,
    ListadoMateriaProfeComponent,
    DetalleMateriaProfeComponent,
    AlumnoComponent,
    ListadoAlumnoComponent,
    DetalleAlumnoComponent,
    ListadoAlumnoBorradoComponent,
    UsuarioLogDirective,
    ExamenComponent,
    ListaExamenComponent,
    AltaExamenComponent,
    ActasDeExamenComponent,
    ListadoDeAsignaturasComponent,
    ListadoDeAprobacionDirectaComponent,
    ListadoNoDirectaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
