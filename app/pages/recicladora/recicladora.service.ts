import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Recicladora } from './../../model/recicladora.model';

@Injectable()
export class RecicladoraService {

    private recicladorasUrl: string = 'app/recicladoras';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {

    }

    getRecicladoras(): Promise<Recicladora[]> {
        this.http.get
        return this.http.get(this.recicladorasUrl)
            .toPromise()
            .then(response => response.json().data as Recicladora[])
            .catch(this.handleError);
    }

     private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

     getRecicladora(id: number): Promise<Recicladora> {
        return this.getRecicladoras()
            .then((recicladora: Recicladora[]) => recicladora.find(recicladora => recicladora.id === id))
    }

    create(recicladora: Recicladora): Promise<Recicladora> {
        return this.http.post(this.recicladorasUrl, JSON.stringify(recicladora), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Recicladora)
            .catch(this.handleError);
    }

    update(recicladora: Recicladora): Promise<Recicladora> {
        const url = `${this.recicladorasUrl}/${recicladora.id}`;
        return this.http.put(url, JSON.stringify(recicladora), { headers: this.headers })
            .toPromise()
            .then((() => recicladora as Recicladora))
            .catch(this.handleError);
    }

    delete(recicladora: Recicladora): Promise<Recicladora> {
        const url = `${this.recicladorasUrl}/${recicladora.id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then((() => recicladora as Recicladora))
            .catch(this.handleError);
    }
}