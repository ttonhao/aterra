"use strict";
var Recicladora = (function () {
    function Recicladora(id, nome, dataValidade, endereco, mapa, operacoesParametro, tipoMaterial, arquivos, plataforma, responsavel) {
        this.id = id;
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.endereco = endereco;
        this.mapa = mapa;
        this.operacoesParametro = operacoesParametro;
        this.tipoMaterial = tipoMaterial;
        this.arquivos = arquivos;
        this.plataforma = plataforma;
        this.responsavel = responsavel;
    }
    return Recicladora;
}());
exports.Recicladora = Recicladora;
//# sourceMappingURL=recicladora.model.js.map