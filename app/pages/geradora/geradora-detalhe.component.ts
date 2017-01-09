import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { GeradoraService } from './geradora.service';

import { Geradora } from './../../model/geradora.model';
import { OperacaoGeradora } from './../../model/operacao-geradora.enum';
import { FuncaoResponsavelGeradora } from './../../model/funcao-responsavel-geradora.enum';
import { KeyPipe, KeysPipe } from './../../pipes/key.pipe';

@Component({
    moduleId: module.id,
    selector: 'geradora-detalhes',
    templateUrl: 'geradora-detalhe.component.html'
})
export class GeradoraDetalhesComponent implements OnInit {
    geradora: Geradora;
    operacaoGeradoraEnum = OperacaoGeradora;
    funcaoResponsavelEnum = FuncaoResponsavelGeradora;
    private novo: boolean = true;
    constructor(
        private contatoService: GeradoraService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.geradora = new Geradora(0, '', null, '', '', null, null,
            {
                email: '', funcao: null, nome: '', telefone: ''
            });
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.novo = false;
                this.contatoService.getGeradora(id)
                    .then((geradora: Geradora) => {
                        console.log(geradora);
                        this.geradora = geradora;
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
            console.log('Cadastra geradora');
            promise = this.contatoService.create(this.geradora);
        }
        else {
            console.log('alterar geradora');
            promise = this.contatoService.update(this.geradora);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}