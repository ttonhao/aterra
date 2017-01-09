import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioService } from './usuario.service';

import { Usuario } from './../../model/usuario.model';
import { TipoEmpresaUsuario } from './../../model/tipo-empresa-usuario.enum';
import { TipoUsuario } from './../../model/tipo-usuario.enum';

@Component({
    moduleId: module.id,
    selector: 'usuario-detalhes',
    templateUrl: 'usuario-detalhe.component.html'
})
export class UsuarioDetalhesComponent implements OnInit {
    usuario: Usuario;
    tipoEmpresaUsuarioEnum = TipoEmpresaUsuario;
    tipoUsuarioEnum = TipoUsuario;
    private novo: boolean = true;
    constructor(
        private contatoService: UsuarioService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.usuario = new Usuario(0, '', '', '', '', null, null, null);
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.novo = false;
                this.contatoService.getUsuario(id)
                    .then((usuario: Usuario) => {
                        console.log(usuario);
                        this.usuario = usuario;
                    })
            }
        })
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        }
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        }
    }

    onSubmit(): void {
        let promise;
        if (this.novo) {
            console.log('Cadastra usuario');
            promise = this.contatoService.create(this.usuario);
        }
        else {
            console.log('alterar usuario');
            promise = this.contatoService.update(this.usuario);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}