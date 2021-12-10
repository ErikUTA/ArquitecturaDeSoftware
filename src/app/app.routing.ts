import { Routes } from '@angular/router';
import { AgregarProyectosComponent } from './agregar-proyectos/agregar-proyectos.component';
import { AgregarTareasComponent } from './agregar-tareas/agregar-tareas.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VermasComponent } from './vermas/vermas.component';

export const AppRoutes: Routes = [  
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'dashboard',
        component: DashboardAdminComponent
    },
    {
        path: 'dashboardUser',
        component: DashboardUserComponent
    },
    {
        path: 'formTarea',
        component: AgregarTareasComponent
    },
    {
        path: 'formProyecto',
        component: AgregarProyectosComponent
    },
    {
        path: 'agregar',
        component: RegistrarComponent
    },    
    {
        path: 'vermas',
        component: VermasComponent
    }
]
