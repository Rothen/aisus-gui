import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class URLService {
    private httpProtocol: string = 'http';
    private wsProtocol: string = 'ws';

    private httpPath: string;
    private wsPath: string;

    constructor() {
        if (environment.server.ssl) {
            this.httpProtocol = 'https';
            this.wsProtocol = 'wss';
        }

        this.httpPath = `${environment.httpbasePath}`;
        this.wsPath = `${environment.wsBasePath}`;
    }

    public http(path: string): string {
        return `${this.httpPath}/${path}`;
    }

    public ws(path: string): string {
        return `${this.wsPath}/${path}`;
    }
}
