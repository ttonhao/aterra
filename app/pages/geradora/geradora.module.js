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
var geradora_lista_component_1 = require("./geradora-lista.component");
var geradora_detalhe_component_1 = require("./geradora-detalhe.component");
var geradora_routing_module_1 = require("./geradora-routing.module");
var geradora_service_1 = require("./geradora.service");
var GeradoraModule = (function () {
    function GeradoraModule() {
    }
    return GeradoraModule;
}());
GeradoraModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            geradora_routing_module_1.GeradoraRoutingModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule,
        ],
        exports: [
            geradora_lista_component_1.GeradoraListaComponent,
        ],
        declarations: [
            geradora_lista_component_1.GeradoraListaComponent,
            geradora_detalhe_component_1.GeradoraDetalhesComponent,
        ],
        providers: [
            geradora_service_1.GeradoraService
        ],
    }),
    __metadata("design:paramtypes", [])
], GeradoraModule);
exports.GeradoraModule = GeradoraModule;
//# sourceMappingURL=geradora.module.js.map