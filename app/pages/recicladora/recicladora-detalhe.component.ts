import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { RecicladoraService } from './recicladora.service';

import { Recicladora } from './../../model/recicladora.model';
import { OperacaoRecicladora } from './../../model/operacao-recicladora.enum';
import { FuncaoResponsavelRecicladora } from './../../model/funcao-responsavel-recicladora.enum';

@Component({
    moduleId: module.id,
    selector: 'recicladora-detalhes',
    templateUrl: 'recicladora-detalhe.component.html'
})
export class RecicladoraDetalhesComponent implements OnInit {
    recicladora: Recicladora;
    operacaoRecicladoraEnum = OperacaoRecicladora;
    funcaoResponsavelEnum = FuncaoResponsavelRecicladora;
    private novo: boolean = true;
    constructor(
        private contatoService: RecicladoraService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.recicladora = new Recicladora(0, '', null, '', '', null, '', null, '',
            {
                email: '', funcao: null, nome: '', telefone: ''
            });
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.novo = false;
                this.contatoService.getRecicladora(id)
                    .then((recicladora: Recicladora) => {
                        console.log(recicladora);
                        this.recicladora = recicladora;
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
            console.log('Cadastra recicladora');
            promise = this.contatoService.create(this.recicladora);
        }
        else {
            console.log('alterar recicladora');
            promise = this.contatoService.update(this.recicladora);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}