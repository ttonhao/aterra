import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecicladoraListaComponent } from './recicladora-lista.component';
import { RecicladoraDetalhesComponent } from './recicladora-detalhe.component';

const routes: Routes = [
    {
        path: 'recicladora',
        component: RecicladoraListaComponent
    },
     {
        path: 'recicladora/save',
        component: RecicladoraDetalhesComponent
    },
    {
        path: 'recicladora/save/:id',
        component: RecicladoraDetalhesComponent
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
export class RecicladoraRoutingModule { }

export const routedComponents = [RecicladoraListaComponent];