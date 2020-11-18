import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fii } from '../models/fii';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class FiiService {

    constructor(private http: HttpClient) { }

    getFiis(filter: string) {
        return this.http
            .get<Fii[]>(API + '/fiis');
    }
}