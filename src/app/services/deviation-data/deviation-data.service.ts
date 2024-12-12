import { Injectable } from '@angular/core';
import { DeviationData } from '../../interfaces/deviation-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DeviationDataService {

    constructor(private http: HttpClient) { }

    public getDeviationData(pipeId: number, deviation_factor: string): Observable<DeviationData> {
        return this.http.get<DeviationData>(`${environment.httpBasePath}/deviation_data/${pipeId}/${deviation_factor}`);
    }
}
