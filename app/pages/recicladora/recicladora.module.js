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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("./../../shared/shared.module");
var recicladora_lista_component_1 = require("./recicladora-lista.component");
var recicladora_detalhe_component_1 = require("./recicladora-detalhe.component");
var recicladora_routing_module_1 = require("./recicladora-routing.module");
var recicladora_service_1 = require("./recicladora.service");
var RecicladoraModule = (function () {
    function RecicladoraModule() {
    }
    return RecicladoraModule;
}());
RecicladoraModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            recicladora_routing_module_1.RecicladoraRoutingModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule
        ],
        exports: [
            recicladora_lista_component_1.RecicladoraListaComponent,
        ],
        declarations: [
            recicladora_lista_component_1.RecicladoraListaComponent,
            recicladora_detalhe_component_1.RecicladoraDetalhesComponent,
        ],
        providers: [
            recicladora_service_1.RecicladoraService
        ],
    }),
    __metadata("design:paramtypes", [])
], RecicladoraModule);
exports.RecicladoraModule = RecicladoraModule;
//# sourceMappingURL=recicladora.module.js.map