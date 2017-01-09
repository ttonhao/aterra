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
var usuario_lista_component_1 = require("./usuario-lista.component");
var usuario_detalhe_component_1 = require("./usuario-detalhe.component");
var usuario_routing_module_1 = require("./usuario-routing.module");
var usuario_service_1 = require("./usuario.service");
var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    return UsuarioModule;
}());
UsuarioModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            usuario_routing_module_1.UsuarioRoutingModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule
        ],
        exports: [
            usuario_lista_component_1.UsuarioListaComponent,
        ],
        declarations: [
            usuario_lista_component_1.UsuarioListaComponent,
            usuario_detalhe_component_1.UsuarioDetalhesComponent,
        ],
        providers: [
            usuario_service_1.UsuarioService
        ],
    }),
    __metadata("design:paramtypes", [])
], UsuarioModule);
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map