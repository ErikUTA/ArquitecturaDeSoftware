import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AgregarTareasComponent } from './agregar-tareas/agregar-tareas.component';
import { AgregarProyectosComponent } from './agregar-proyectos/agregar-proyectos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TablaComponent } from './tabla/tabla.component';
import { VermasComponent } from './vermas/vermas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    AgregarTareasComponent,
    AgregarProyectosComponent,
    RegistrarComponent,
    TablaComponent,
    VermasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
