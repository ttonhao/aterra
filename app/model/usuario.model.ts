import { TipoEmpresaUsuario } from './tipo-empresa-usuario.enum';
import { TipoUsuario } from './tipo-usuario.enum';

export class Usuario{
    constructor(
        public id:number,
        public nome: string,
        public email:string,
        public senha:string,
        public telefone:string,
        public empresa:any,
        public tipoEmpresa:TipoEmpresaUsuario,
        public tipoUsuario:TipoUsuario
    ){}
}
