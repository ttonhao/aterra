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
var usuario_service_1 = require("./usuario.service");
var usuario_model_1 = require("./../../model/usuario.model");
var tipo_empresa_usuario_enum_1 = require("./../../model/tipo-empresa-usuario.enum");
var tipo_usuario_enum_1 = require("./../../model/tipo-usuario.enum");
var UsuarioDetalhesComponent = (function () {
    function UsuarioDetalhesComponent(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        this.tipoEmpresaUsuarioEnum = tipo_empresa_usuario_enum_1.TipoEmpresaUsuario;
        this.tipoUsuarioEnum = tipo_usuario_enum_1.TipoUsuario;
        this.novo = true;
    }
    UsuarioDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuario = new usuario_model_1.Usuario(0, '', '', '', '', null, null, null);
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.novo = false;
                _this.contatoService.getUsuario(id)
                    .then(function (usuario) {
                    console.log(usuario);
                    _this.usuario = usuario;
                });
            }
        });
    };
    UsuarioDetalhesComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    UsuarioDetalhesComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    };
    UsuarioDetalhesComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise;
        if (this.novo) {
            console.log('Cadastra usuario');
            promise = this.contatoService.create(this.usuario);
        }
        else {
            console.log('alterar usuario');
            promise = this.contatoService.update(this.usuario);
        }
        promise.then(function (contato) { return _this.goBack(); });
    };
    UsuarioDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UsuarioDetalhesComponent;
}());
UsuarioDetalhesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'usuario-detalhes',
        templateUrl: 'usuario-detalhe.component.html'
    }),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        router_1.ActivatedRoute,
        common_1.Location])
], UsuarioDetalhesComponent);
exports.UsuarioDetalhesComponent = UsuarioDetalhesComponent;
//# sourceMappingURL=usuario-detalhe.component.js.map