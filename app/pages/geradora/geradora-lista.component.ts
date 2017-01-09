import { Component, OnInit } from '@angular/core';

import { GeradoraService } from './geradora.service';
import { Geradora } from './../../model/geradora.model';
import { OperacaoGeradora } from './../../model/operacao-geradora.enum';
import { DialogService } from './../../services/dialog.service';
import { KeyPipe, KeysPipe } from './../../pipes/key.pipe';

@Component({
    moduleId: module.id,
    selector: 'geradora-lista',
    templateUrl: 'geradora-lista.component.html'
})
export class GeradoraListaComponent implements OnInit {
    operacaoGeradora = OperacaoGeradora;
    geradoras: Geradora[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeOut: any;

    constructor(
        private geradoraService: GeradoraService,
        private dialogService: DialogService
    ) {}

    ngOnInit() {
        this.geradoraService.getGeradoras()
            .then((geradoras: Geradora[]) => {
                this.geradoras = geradoras;
            }).catch(err => {
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de geradoras.'
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

    onDelete(geradora: Geradora): void {
        this.dialogService.confirm('Deseja remover o geradora ' + geradora.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.geradoraService.delete(geradora)
                        .then(() => {
                            this.geradoras = this.geradoras.filter(c => c.id != geradora.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Geradora deletado!'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar o geradora.'
                            });
                        });
                }
            });
    }

}