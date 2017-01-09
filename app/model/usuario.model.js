"use strict";
var Usuario = (function () {
    function Usuario(id, nome, email, senha, telefone, empresa, tipoEmpresa, tipoUsuario) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.empresa = empresa;
        this.tipoEmpresa = tipoEmpresa;
        this.tipoUsuario = tipoUsuario;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.model.js.map