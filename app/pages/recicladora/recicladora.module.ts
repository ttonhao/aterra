import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';

import { RecicladoraListaComponent } from './recicladora-lista.component';
import { RecicladoraDetalhesComponent } from './recicladora-detalhe.component';
import { RecicladoraRoutingModule } from './recicladora-routing.module';
import { RecicladoraService } from './recicladora.service';

@NgModule({
    imports: [
        CommonModule,
        RecicladoraRoutingModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        RecicladoraListaComponent,
    ],
    declarations: [
        RecicladoraListaComponent,
        RecicladoraDetalhesComponent,
    ],
    providers: [
        RecicladoraService
    ],
})
export class RecicladoraModule { }
