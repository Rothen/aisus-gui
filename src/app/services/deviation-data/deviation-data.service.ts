import { Injectable } from '@angular/core';
import { DeviationData } from '../../interfaces/deviation-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
    providedIn: 'root'
})
export class DeviationDataService {

    constructor(private http: HttpClient, private url: URLService) { }

    public getDeviationData(pipeId: number, deviation_factor: string): Observable<DeviationData> {
        return this.http.get<DeviationData>(this.url.http(`deviation_data/${pipeId}/${deviation_factor}`));
    }
}
