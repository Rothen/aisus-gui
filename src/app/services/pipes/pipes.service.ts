import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PipesData } from '../../interfaces/pipes-data';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

    constructor(private http: HttpClient, private url: URLService) { }

    public getPipesData(): Observable<PipesData> {
        return this.http.get<PipesData>(this.url.http('get_pipes_data'));
    }
}
