"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var recicladora_service_1 = require("./recicladora.service");
var operacao_recicladora_enum_1 = require("./../../model/operacao-recicladora.enum");
var dialog_service_1 = require("./../../services/dialog.service");
var RecicladoraListaComponent = (function () {
    function RecicladoraListaComponent(recicladoraService, dialogService) {
        this.recicladoraService = recicladoraService;
        this.dialogService = dialogService;
        this.operacaoRecicladora = operacao_recicladora_enum_1.OperacaoRecicladora;
        this.recicladoras = [];
    }
    RecicladoraListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recicladoraService.getRecicladoras()
            .then(function (recicladoras) {
            _this.recicladoras = recicladoras;
        }).catch(function (err) {
            _this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de recicladoras.'
            });
        });
    };
    RecicladoraListaComponent.prototype.mostrarMensagem = function (mensagem) {
        var _this = this;
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeOut) {
                clearTimeout(this.currentTimeOut);
            }
            this.currentTimeOut = setTimeout(function () {
                _this.mensagem = undefined;
            }, 3000);
        }
    };
    RecicladoraListaComponent.prototype.montarClasses = function (tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    };
    RecicladoraListaComponent.prototype.onDelete = function (recicladora) {
        var _this = this;
        this.dialogService.confirm('Deseja remover o recicladora ' + recicladora.nome + ' ?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.recicladoraService.delete(recicladora)
                    .then(function () {
                    _this.recicladoras = _this.recicladoras.filter(function (c) { return c.id != recicladora.id; });
                    _this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Recicladora deletado!'
                    });
                }).catch(function (err) {
                    console.log(err);
                    _this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar o recicladora.'
                    });
                });
            }
        });
    };
    return RecicladoraListaComponent;
}());
RecicladoraListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'recicladora-lista',
        templateUrl: 'recicladora-lista.component.html'
    }),
    __metadata("design:paramtypes", [recicladora_service_1.RecicladoraService,
        dialog_service_1.DialogService])
], RecicladoraListaComponent);
exports.RecicladoraListaComponent = RecicladoraListaComponent;
//# sourceMappingURL=recicladora-lista.component.js.map