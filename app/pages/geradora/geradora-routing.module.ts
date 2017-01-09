import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeradoraListaComponent } from './geradora-lista.component';
import { GeradoraDetalhesComponent } from './geradora-detalhe.component';

const routes: Routes = [
    {
        path: 'geradora',
        component: GeradoraListaComponent
    },
     {
        path: 'geradora/save',
        component: GeradoraDetalhesComponent
    },
    {
        path: 'geradora/save/:id',
        component: GeradoraDetalhesComponent
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
export class GeradoraRoutingModule { }

export const routedComponents = [GeradoraListaComponent];