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
var geradora_lista_component_1 = require("./geradora-lista.component");
var geradora_detalhe_component_1 = require("./geradora-detalhe.component");
var routes = [
    {
        path: 'geradora',
        component: geradora_lista_component_1.GeradoraListaComponent
    },
    {
        path: 'geradora/save',
        component: geradora_detalhe_component_1.GeradoraDetalhesComponent
    },
    {
        path: 'geradora/save/:id',
        component: geradora_detalhe_component_1.GeradoraDetalhesComponent
    },
];
var GeradoraRoutingModule = (function () {
    function GeradoraRoutingModule() {
    }
    return GeradoraRoutingModule;
}());
GeradoraRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ],
    }),
    __metadata("design:paramtypes", [])
], GeradoraRoutingModule);
exports.GeradoraRoutingModule = GeradoraRoutingModule;
exports.routedComponents = [geradora_lista_component_1.GeradoraListaComponent];
//# sourceMappingURL=geradora-routing.module.js.map