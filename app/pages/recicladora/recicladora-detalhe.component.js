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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var recicladora_service_1 = require("./recicladora.service");
var recicladora_model_1 = require("./../../model/recicladora.model");
var operacao_recicladora_enum_1 = require("./../../model/operacao-recicladora.enum");
var funcao_responsavel_recicladora_enum_1 = require("./../../model/funcao-responsavel-recicladora.enum");
var RecicladoraDetalhesComponent = (function () {
    function RecicladoraDetalhesComponent(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        this.operacaoRecicladoraEnum = operacao_recicladora_enum_1.OperacaoRecicladora;
        this.funcaoResponsavelEnum = funcao_responsavel_recicladora_enum_1.FuncaoResponsavelRecicladora;
        this.novo = true;
    }
    RecicladoraDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recicladora = new recicladora_model_1.Recicladora(0, '', null, '', '', null, '', null, '', {
            email: '', funcao: null, nome: '', telefone: ''
        });
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.novo = false;
                _this.contatoService.getRecicladora(id)
                    .then(function (recicladora) {
                    console.log(recicladora);
                    _this.recicladora = recicladora;
                });
            }
        });
    };
    RecicladoraDetalhesComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    RecicladoraDetalhesComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    };
    RecicladoraDetalhesComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise;
        if (this.novo) {
            console.log('Cadastra recicladora');
            promise = this.contatoService.create(this.recicladora);
        }
        else {
            console.log('alterar recicladora');
            promise = this.contatoService.update(this.recicladora);
        }
        promise.then(function (contato) { return _this.goBack(); });
    };
    RecicladoraDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    return RecicladoraDetalhesComponent;
}());
RecicladoraDetalhesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'recicladora-detalhes',
        templateUrl: 'recicladora-detalhe.component.html'
    }),
    __metadata("design:paramtypes", [recicladora_service_1.RecicladoraService,
        router_1.ActivatedRoute,
        common_1.Location])
], RecicladoraDetalhesComponent);
exports.RecicladoraDetalhesComponent = RecicladoraDetalhesComponent;
//# sourceMappingURL=recicladora-detalhe.component.js.map