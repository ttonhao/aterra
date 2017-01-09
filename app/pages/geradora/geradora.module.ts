import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';

import { GeradoraListaComponent } from './geradora-lista.component';
import { GeradoraDetalhesComponent } from './geradora-detalhe.component';
import { GeradoraRoutingModule } from './geradora-routing.module';
import { GeradoraService } from './geradora.service';

@NgModule({
    imports: [
        CommonModule,
        GeradoraRoutingModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        GeradoraListaComponent,
    ],
    declarations: [
        GeradoraListaComponent,
        GeradoraDetalhesComponent,
    ],
    providers: [
        GeradoraService
    ],
})
export class GeradoraModule { }
