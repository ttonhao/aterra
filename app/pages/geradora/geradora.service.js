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
var GeradoraService = (function () {
    function GeradoraService(http) {
        this.http = http;
        this.geradorasUrl = 'app/geradoras';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    GeradoraService.prototype.getGeradoras = function () {
        this.http.get;
        return this.http.get(this.geradorasUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GeradoraService.prototype.handleError = function (err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    };
    GeradoraService.prototype.getGeradora = function (id) {
        return this.getGeradoras()
            .then(function (geradora) { return geradora.find(function (geradora) { return geradora.id === id; }); });
    };
    GeradoraService.prototype.create = function (geradora) {
        return this.http.post(this.geradorasUrl, JSON.stringify(geradora), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GeradoraService.prototype.update = function (geradora) {
        var url = this.geradorasUrl + "/" + geradora.id;
        return this.http.put(url, JSON.stringify(geradora), { headers: this.headers })
            .toPromise()
            .then((function () { return geradora; }))
            .catch(this.handleError);
    };
    GeradoraService.prototype.delete = function (geradora) {
        var url = this.geradorasUrl + "/" + geradora.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then((function () { return geradora; }))
            .catch(this.handleError);
    };
    return GeradoraService;
}());
GeradoraService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GeradoraService);
exports.GeradoraService = GeradoraService;
//# sourceMappingURL=geradora.service.js.map