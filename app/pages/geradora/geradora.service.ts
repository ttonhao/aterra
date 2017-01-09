import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Geradora } from './../../model/geradora.model';

@Injectable()
export class GeradoraService {

    private geradorasUrl: string = 'app/geradoras';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {

    }

    getGeradoras(): Promise<Geradora[]> {
        this.http.get
        return this.http.get(this.geradorasUrl)
            .toPromise()
            .then(response => response.json().data as Geradora[])
            .catch(this.handleError);
    }

     private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

     getGeradora(id: number): Promise<Geradora> {
        return this.getGeradoras()
            .then((geradora: Geradora[]) => geradora.find(geradora => geradora.id === id))
    }

    create(geradora: Geradora): Promise<Geradora> {
        return this.http.post(this.geradorasUrl, JSON.stringify(geradora), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Geradora)
            .catch(this.handleError);
    }

    update(geradora: Geradora): Promise<Geradora> {
        const url = `${this.geradorasUrl}/${geradora.id}`;
        return this.http.put(url, JSON.stringify(geradora), { headers: this.headers })
            .toPromise()
            .then((() => geradora as Geradora))
            .catch(this.handleError);
    }

    delete(geradora: Geradora): Promise<Geradora> {
        const url = `${this.geradorasUrl}/${geradora.id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then((() => geradora as Geradora))
            .catch(this.handleError);
    }
}