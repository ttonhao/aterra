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
var usuario_lista_component_1 = require("./usuario-lista.component");
var usuario_detalhe_component_1 = require("./usuario-detalhe.component");
var routes = [
    {
        path: 'usuario',
        component: usuario_lista_component_1.UsuarioListaComponent
    },
    {
        path: 'usuario/save',
        component: usuario_detalhe_component_1.UsuarioDetalhesComponent
    },
    {
        path: 'usuario/save/:id',
        component: usuario_detalhe_component_1.UsuarioDetalhesComponent
    },
];
var UsuarioRoutingModule = (function () {
    function UsuarioRoutingModule() {
    }
    return UsuarioRoutingModule;
}());
UsuarioRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ],
    }),
    __metadata("design:paramtypes", [])
], UsuarioRoutingModule);
exports.UsuarioRoutingModule = UsuarioRoutingModule;
exports.routedComponents = [usuario_lista_component_1.UsuarioListaComponent];
//# sourceMappingURL=usuario-routing.module.js.map