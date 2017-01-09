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
var RecicladoraService = (function () {
    function RecicladoraService(http) {
        this.http = http;
        this.recicladorasUrl = 'app/recicladoras';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RecicladoraService.prototype.getRecicladoras = function () {
        this.http.get;
        return this.http.get(this.recicladorasUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RecicladoraService.prototype.handleError = function (err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    };
    RecicladoraService.prototype.getRecicladora = function (id) {
        return this.getRecicladoras()
            .then(function (recicladora) { return recicladora.find(function (recicladora) { return recicladora.id === id; }); });
    };
    RecicladoraService.prototype.create = function (recicladora) {
        return this.http.post(this.recicladorasUrl, JSON.stringify(recicladora), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RecicladoraService.prototype.update = function (recicladora) {
        var url = this.recicladorasUrl + "/" + recicladora.id;
        return this.http.put(url, JSON.stringify(recicladora), { headers: this.headers })
            .toPromise()
            .then((function () { return recicladora; }))
            .catch(this.handleError);
    };
    RecicladoraService.prototype.delete = function (recicladora) {
        var url = this.recicladorasUrl + "/" + recicladora.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then((function () { return recicladora; }))
            .catch(this.handleError);
    };
    return RecicladoraService;
}());
RecicladoraService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RecicladoraService);
exports.RecicladoraService = RecicladoraService;
//# sourceMappingURL=recicladora.service.js.map