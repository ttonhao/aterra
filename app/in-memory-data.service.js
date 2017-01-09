"use strict";
var operacao_geradora_enum_1 = require("./model/operacao-geradora.enum");
var funcao_responsavel_geradora_enum_1 = require("./model/funcao-responsavel-geradora.enum");
var operacao_recicladora_enum_1 = require("./model/operacao-recicladora.enum");
var funcao_responsavel_recicladora_enum_1 = require("./model/funcao-responsavel-recicladora.enum");
var tipo_empresa_usuario_enum_1 = require("./model/tipo-empresa-usuario.enum");
var tipo_usuario_enum_1 = require("./model/tipo-usuario.enum");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var geradoras = [
            {
                id: 1,
                nome: 'teste 1',
                dataValidade: new Date(2017, 0, 25),
                endereco: 'Rua Gentil Portugal do Brasil',
                operacoesParametro: operacao_geradora_enum_1.OperacaoGeradora.Doacao,
                mapa: 'teste',
                responsavel: {
                    nome: 'Antonio Lucas',
                    email: 'ttonhao@gmail.com',
                    telefone: '(31)99117-8550',
                    funcao: funcao_responsavel_geradora_enum_1.FuncaoResponsavelGeradora.Administrador
                },
                arquivos: []
            }
        ];
        var recicladoras = [
            {
                id: 1,
                nome: 'teste 3',
                dataValidade: new Date(2017, 0, 25),
                endereco: 'Rua Gentil Portugal do Brasil',
                operacoesParametro: operacao_recicladora_enum_1.OperacaoRecicladora.Coleta,
                mapa: 'teste',
                responsavel: {
                    nome: 'Antonio Lucas',
                    email: 'ttonhao@gmail.com',
                    telefone: '(31)99117-8550',
                    funcao: funcao_responsavel_recicladora_enum_1.FuncaoResponsavelRecicladora.Reciclador
                },
                plataforma: 'teste',
                tipoMaterial: 'teste',
                arquivos: []
            }
        ];
        var usuarios = [
            {
                id: 1,
                nome: 'Antônio Lucas',
                email: 'ttonhao@gmail.com',
                empresa: geradoras[0],
                senha: '123',
                telefone: '(31)9117-8550',
                tipoEmpresa: tipo_empresa_usuario_enum_1.TipoEmpresaUsuario.Geradora,
                tipoUsuario: tipo_usuario_enum_1.TipoUsuario.Administrador
            }
        ];
        return {
            geradoras: geradoras,
            recicladoras: recicladoras,
            usuarios: usuarios
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map