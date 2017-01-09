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
var geradora_service_1 = require("./geradora.service");
var operacao_geradora_enum_1 = require("./../../model/operacao-geradora.enum");
var dialog_service_1 = require("./../../services/dialog.service");
var GeradoraListaComponent = (function () {
    function GeradoraListaComponent(geradoraService, dialogService) {
        this.geradoraService = geradoraService;
        this.dialogService = dialogService;
        this.operacaoGeradora = operacao_geradora_enum_1.OperacaoGeradora;
        this.geradoras = [];
    }
    GeradoraListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geradoraService.getGeradoras()
            .then(function (geradoras) {
            _this.geradoras = geradoras;
        }).catch(function (err) {
            _this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de geradoras.'
            });
        });
    };
    GeradoraListaComponent.prototype.mostrarMensagem = function (mensagem) {
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
    GeradoraListaComponent.prototype.montarClasses = function (tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    };
    GeradoraListaComponent.prototype.onDelete = function (geradora) {
        var _this = this;
        this.dialogService.confirm('Deseja remover o geradora ' + geradora.nome + ' ?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.geradoraService.delete(geradora)
                    .then(function () {
                    _this.geradoras = _this.geradoras.filter(function (c) { return c.id != geradora.id; });
                    _this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Geradora deletado!'
                    });
                }).catch(function (err) {
                    console.log(err);
                    _this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar o geradora.'
                    });
                });
            }
        });
    };
    return GeradoraListaComponent;
}());
GeradoraListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'geradora-lista',
        templateUrl: 'geradora-lista.component.html'
    }),
    __metadata("design:paramtypes", [geradora_service_1.GeradoraService,
        dialog_service_1.DialogService])
], GeradoraListaComponent);
exports.GeradoraListaComponent = GeradoraListaComponent;
//# sourceMappingURL=geradora-lista.component.js.map