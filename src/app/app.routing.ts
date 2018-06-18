import {Routes, RouterModule} from "@angular/router";
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component'
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";

const routes:Routes = [
	{path: '', component: InicioComponent},
	{path: 'inicio', component: InicioComponent},
	{path:'registro', component: RegistroComponent},
	{path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);