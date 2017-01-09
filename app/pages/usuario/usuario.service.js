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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.usuariosUrl = 'app/usuarios';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UsuarioService.prototype.getUsuarios = function () {
        this.http.get;
        return this.http.get(this.usuariosUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UsuarioService.prototype.handleError = function (err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    };
    UsuarioService.prototype.getUsuario = function (id) {
        return this.getUsuarios()
            .then(function (usuario) { return usuario.find(function (usuario) { return usuario.id === id; }); });
    };
    UsuarioService.prototype.create = function (usuario) {
        return this.http.post(this.usuariosUrl, JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UsuarioService.prototype.update = function (usuario) {
        var url = this.usuariosUrl + "/" + usuario.id;
        return this.http.put(url, JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then((function () { return usuario; }))
            .catch(this.handleError);
    };
    UsuarioService.prototype.delete = function (usuario) {
        var url = this.usuariosUrl + "/" + usuario.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then((function () { return usuario; }))
            .catch(this.handleError);
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map