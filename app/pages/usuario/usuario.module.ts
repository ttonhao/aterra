import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';

import { UsuarioListaComponent } from './usuario-lista.component';
import { UsuarioDetalhesComponent } from './usuario-detalhe.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './usuario.service';

@NgModule({
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        UsuarioListaComponent,
    ],
    declarations: [
        UsuarioListaComponent,
        UsuarioDetalhesComponent,
    ],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule { }
