import { Responsavel } from './responsavel.model';
import { OperacaoRecicladora } from './operacao-recicladora.enum';


export class Recicladora{
    constructor(
        public id:number,
        public nome: string,
        public dataValidade:Date,
        public endereco:string,
        public mapa:string,
        public operacoesParametro:OperacaoRecicladora,
        public tipoMaterial:string,
        public arquivos: string[],
        public plataforma:string,
        public responsavel: Responsavel
    ){}
}
