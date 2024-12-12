import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PipesData } from '../../interfaces/pipes-data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

    constructor(private http: HttpClient) { }

    public getPipesData(): Observable<PipesData> {
        return this.http.get<PipesData>(`${environment.httpBasePath}/get_pipes_data`);
    }
}
