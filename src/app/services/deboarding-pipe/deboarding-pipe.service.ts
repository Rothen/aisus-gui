import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeboardingPipeData } from '../../interfaces/deboarding_pipe_data';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
    providedIn: 'root'
})
export class DeboardingPipeService {
    constructor(private http: HttpClient, private url: URLService) { }

    public getPipeData(pipeId: number): Observable<DeboardingPipeData> {
        return this.http.get<DeboardingPipeData>(this.url.http(`deboarding_pipe/${pipeId}`));
    }
}
