import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Usuario } from './../../model/usuario.model';

@Injectable()
export class UsuarioService {

    private usuariosUrl: string = 'app/usuarios';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {

    }

    getUsuarios(): Promise<Usuario[]> {
        this.http.get
        return this.http.get(this.usuariosUrl)
            .toPromise()
            .then(response => response.json().data as Usuario[])
            .catch(this.handleError);
    }

     private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

     getUsuario(id: number): Promise<Usuario> {
        return this.getUsuarios()
            .then((usuario: Usuario[]) => usuario.find(usuario => usuario.id === id))
    }

    create(usuario: Usuario): Promise<Usuario> {
        return this.http.post(this.usuariosUrl, JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Usuario)
            .catch(this.handleError);
    }

    update(usuario: Usuario): Promise<Usuario> {
        const url = `${this.usuariosUrl}/${usuario.id}`;
        return this.http.put(url, JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then((() => usuario as Usuario))
            .catch(this.handleError);
    }

    delete(usuario: Usuario): Promise<Usuario> {
        const url = `${this.usuariosUrl}/${usuario.id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then((() => usuario as Usuario))
            .catch(this.handleError);
    }
}