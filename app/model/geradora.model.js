"use strict";
var Geradora = (function () {
    function Geradora(id, nome, dataValidade, endereco, mapa, operacoesParametro, arquivos, responsavel) {
        this.id = id;
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.endereco = endereco;
        this.mapa = mapa;
        this.operacoesParametro = operacoesParametro;
        this.arquivos = arquivos;
        this.responsavel = responsavel;
    }
    return Geradora;
}());
exports.Geradora = Geradora;
//# sourceMappingURL=geradora.model.js.map