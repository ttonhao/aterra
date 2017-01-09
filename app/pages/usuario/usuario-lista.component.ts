import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { Usuario } from './../../model/usuario.model';
import { TipoEmpresaUsuario } from './../../model/tipo-empresa-usuario.enum';
import { TipoUsuario } from './../../model/tipo-usuario.enum';
import { DialogService } from './../../services/dialog.service';

@Component({
    moduleId: module.id,
    selector: 'usuario-lista',
    templateUrl: 'usuario-lista.component.html'
})
export class UsuarioListaComponent implements OnInit {
    tipoEmpresaUsuarioEnum = TipoEmpresaUsuario;
    tipoUsuarioEnum = TipoUsuario;
    usuarios: Usuario[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeOut: any;

    constructor(
        private usuarioService: UsuarioService,
        private dialogService: DialogService
    ) {}

    ngOnInit() {
        this.usuarioService.getUsuarios()
            .then((usuarios: Usuario[]) => {
                this.usuarios = usuarios;
            }).catch(err => {
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de usuarios.'
                });
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeOut) {
                clearTimeout(this.currentTimeOut);
            }
            this.currentTimeOut = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }

    onDelete(usuario: Usuario): void {
        this.dialogService.confirm('Deseja remover o usuario ' + usuario.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.usuarioService.delete(usuario)
                        .then(() => {
                            this.usuarios = this.usuarios.filter(c => c.id != usuario.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Usuario deletado!'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar o usuario.'
                            });
                        });
                }
            });
    }

}