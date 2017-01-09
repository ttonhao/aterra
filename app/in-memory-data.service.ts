import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Geradora } from './model/geradora.model';
import { Recicladora } from './model/recicladora.model';
import { Responsavel } from './model/responsavel.model';
import { Usuario } from './model/usuario.model';
import { OperacaoGeradora } from './model/operacao-geradora.enum';
import { FuncaoResponsavelGeradora } from './model/funcao-responsavel-geradora.enum';
import { OperacaoRecicladora } from './model/operacao-recicladora.enum';
import { FuncaoResponsavelRecicladora } from './model/funcao-responsavel-recicladora.enum';
import { TipoEmpresaUsuario } from './model/tipo-empresa-usuario.enum';
import { TipoUsuario } from './model/tipo-usuario.enum';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        let geradoras: Geradora[] = [
            {
                id: 1,
                nome: 'teste 1',
                dataValidade: new Date(2017, 0, 25),
                endereco: 'Rua Gentil Portugal do Brasil',
                operacoesParametro: OperacaoGeradora.Doacao,
                mapa: 'teste',
                responsavel: {
                    nome: 'Antonio Lucas',
                    email: 'ttonhao@gmail.com',
                    telefone: '(31)99117-8550',
                    funcao: FuncaoResponsavelGeradora.Administrador
                },
                arquivos: []
            }
        ];

        let recicladoras: Recicladora[] = [
            {
                id: 1,
                nome: 'teste 3',
                dataValidade: new Date(2017, 0, 25),
                endereco: 'Rua Gentil Portugal do Brasil',
                operacoesParametro: OperacaoRecicladora.Coleta,
                mapa: 'teste',
                responsavel: {
                    nome: 'Antonio Lucas',
                    email: 'ttonhao@gmail.com',
                    telefone: '(31)99117-8550',
                    funcao: FuncaoResponsavelRecicladora.Reciclador
                },
                plataforma:'teste',
                tipoMaterial:'teste',
                arquivos: []
            }
        ];

        let usuarios: Usuario[] = [
            {
                id: 1,
                nome: 'Antônio Lucas',
                email:'ttonhao@gmail.com',
                empresa:geradoras[0],
                senha:'123',
                telefone:'(31)9117-8550',
                tipoEmpresa: TipoEmpresaUsuario.Geradora,
                tipoUsuario: TipoUsuario.Administrador
                }
                
        ]
        return {
            geradoras: geradoras,
            recicladoras: recicladoras,
            usuarios: usuarios
        };
    }
}