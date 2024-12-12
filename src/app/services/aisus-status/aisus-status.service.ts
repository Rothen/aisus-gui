import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AISUSStatusData } from '../../interfaces/aisus-status-data';
import { URLService } from './url/url.service';

@Injectable({
  providedIn: 'root'
})
export class AISUSStatusService {

  constructor(private http: HttpClient, private url: URLService) { }

    public initializeAISUS(): Observable<void> {
        return this.http.get<void>(this.url.http('initialize_aisus'));
    }

    public isAISUSInitialized(): Observable<AISUSStatusData> {
        return this.http.get<AISUSStatusData>(this.url.http('aisus_status'));
    }
}
