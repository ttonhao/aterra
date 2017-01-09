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
var geradora_service_1 = require("./geradora.service");
var geradora_model_1 = require("./../../model/geradora.model");
var operacao_geradora_enum_1 = require("./../../model/operacao-geradora.enum");
var funcao_responsavel_geradora_enum_1 = require("./../../model/funcao-responsavel-geradora.enum");
var GeradoraDetalhesComponent = (function () {
    function GeradoraDetalhesComponent(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        this.operacaoGeradoraEnum = operacao_geradora_enum_1.OperacaoGeradora;
        this.funcaoResponsavelEnum = funcao_responsavel_geradora_enum_1.FuncaoResponsavelGeradora;
        this.novo = true;
    }
    GeradoraDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geradora = new geradora_model_1.Geradora(0, '', null, '', '', null, null, {
            email: '', funcao: null, nome: '', telefone: ''
        });
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.novo = false;
                _this.contatoService.getGeradora(id)
                    .then(function (geradora) {
                    console.log(geradora);
                    _this.geradora = geradora;
                });
            }
        });
    };
    GeradoraDetalhesComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    GeradoraDetalhesComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    };
    GeradoraDetalhesComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise;
        if (this.novo) {
            console.log('Cadastra geradora');
            promise = this.contatoService.create(this.geradora);
        }
        else {
            console.log('alterar geradora');
            promise = this.contatoService.update(this.geradora);
        }
        promise.then(function (contato) { return _this.goBack(); });
    };
    GeradoraDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    return GeradoraDetalhesComponent;
}());
GeradoraDetalhesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'geradora-detalhes',
        templateUrl: 'geradora-detalhe.component.html'
    }),
    __metadata("design:paramtypes", [geradora_service_1.GeradoraService,
        router_1.ActivatedRoute,
        common_1.Location])
], GeradoraDetalhesComponent);
exports.GeradoraDetalhesComponent = GeradoraDetalhesComponent;
//# sourceMappingURL=geradora-detalhe.component.js.map