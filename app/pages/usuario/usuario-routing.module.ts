import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListaComponent } from './usuario-lista.component';
import { UsuarioDetalhesComponent } from './usuario-detalhe.component';

const routes: Routes = [
    {
        path: 'usuario',
        component: UsuarioListaComponent
    },
     {
        path: 'usuario/save',
        component: UsuarioDetalhesComponent
    },
    {
        path: 'usuario/save/:id',
        component: UsuarioDetalhesComponent
    },
];

@NgModule({
    imports:
    [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class UsuarioRoutingModule { }

export const routedComponents = [UsuarioListaComponent];