import { Responsavel } from './responsavel.model';
import { OperacaoGeradora } from './operacao-geradora.enum';


export class Geradora{
    constructor(
        public id:number,
        public nome: string,
        public dataValidade:Date,
        public endereco:string,
        public mapa:string,
        public operacoesParametro:OperacaoGeradora,
        public arquivos: string[],
        public responsavel: Responsavel
    ){}
}
