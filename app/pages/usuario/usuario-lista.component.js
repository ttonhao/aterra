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
var usuario_service_1 = require("./usuario.service");
var tipo_empresa_usuario_enum_1 = require("./../../model/tipo-empresa-usuario.enum");
var tipo_usuario_enum_1 = require("./../../model/tipo-usuario.enum");
var dialog_service_1 = require("./../../services/dialog.service");
var UsuarioListaComponent = (function () {
    function UsuarioListaComponent(usuarioService, dialogService) {
        this.usuarioService = usuarioService;
        this.dialogService = dialogService;
        this.tipoEmpresaUsuarioEnum = tipo_empresa_usuario_enum_1.TipoEmpresaUsuario;
        this.tipoUsuarioEnum = tipo_usuario_enum_1.TipoUsuario;
        this.usuarios = [];
    }
    UsuarioListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getUsuarios()
            .then(function (usuarios) {
            _this.usuarios = usuarios;
        }).catch(function (err) {
            _this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de usuarios.'
            });
        });
    };
    UsuarioListaComponent.prototype.mostrarMensagem = function (mensagem) {
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
    UsuarioListaComponent.prototype.montarClasses = function (tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    };
    UsuarioListaComponent.prototype.onDelete = function (usuario) {
        var _this = this;
        this.dialogService.confirm('Deseja remover o usuario ' + usuario.nome + ' ?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.usuarioService.delete(usuario)
                    .then(function () {
                    _this.usuarios = _this.usuarios.filter(function (c) { return c.id != usuario.id; });
                    _this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Usuario deletado!'
                    });
                }).catch(function (err) {
                    console.log(err);
                    _this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar o usuario.'
                    });
                });
            }
        });
    };
    return UsuarioListaComponent;
}());
UsuarioListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'usuario-lista',
        templateUrl: 'usuario-lista.component.html'
    }),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        dialog_service_1.DialogService])
], UsuarioListaComponent);
exports.UsuarioListaComponent = UsuarioListaComponent;
//# sourceMappingURL=usuario-lista.component.js.map