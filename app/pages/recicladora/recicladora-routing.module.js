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
var recicladora_lista_component_1 = require("./recicladora-lista.component");
var recicladora_detalhe_component_1 = require("./recicladora-detalhe.component");
var routes = [
    {
        path: 'recicladora',
        component: recicladora_lista_component_1.RecicladoraListaComponent
    },
    {
        path: 'recicladora/save',
        component: recicladora_detalhe_component_1.RecicladoraDetalhesComponent
    },
    {
        path: 'recicladora/save/:id',
        component: recicladora_detalhe_component_1.RecicladoraDetalhesComponent
    },
];
var RecicladoraRoutingModule = (function () {
    function RecicladoraRoutingModule() {
    }
    return RecicladoraRoutingModule;
}());
RecicladoraRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ],
    }),
    __metadata("design:paramtypes", [])
], RecicladoraRoutingModule);
exports.RecicladoraRoutingModule = RecicladoraRoutingModule;
exports.routedComponents = [recicladora_lista_component_1.RecicladoraListaComponent];
//# sourceMappingURL=recicladora-routing.module.js.map