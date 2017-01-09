import { Component, OnInit } from '@angular/core';

import { RecicladoraService } from './recicladora.service';
import { Recicladora } from './../../model/recicladora.model';
import { OperacaoRecicladora } from './../../model/operacao-recicladora.enum';
import { DialogService } from './../../services/dialog.service';

@Component({
    moduleId: module.id,
    selector: 'recicladora-lista',
    templateUrl: 'recicladora-lista.component.html'
})
export class RecicladoraListaComponent implements OnInit {
    operacaoRecicladora = OperacaoRecicladora;
    recicladoras: Recicladora[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeOut: any;

    constructor(
        private recicladoraService: RecicladoraService,
        private dialogService: DialogService
    ) {}

    ngOnInit() {
        this.recicladoraService.getRecicladoras()
            .then((recicladoras: Recicladora[]) => {
                this.recicladoras = recicladoras;
            }).catch(err => {
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de recicladoras.'
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

    onDelete(recicladora: Recicladora): void {
        this.dialogService.confirm('Deseja remover o recicladora ' + recicladora.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.recicladoraService.delete(recicladora)
                        .then(() => {
                            this.recicladoras = this.recicladoras.filter(c => c.id != recicladora.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Recicladora deletado!'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar o recicladora.'
                            });
                        });
                }
            });
    }

}