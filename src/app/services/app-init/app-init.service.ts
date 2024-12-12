import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, Subject, zip } from 'rxjs';
import { PipesData } from '../../interfaces/pipes-data';
import { Pipe } from '../../interfaces/pipe';
import { CamerasData } from '../../interfaces/cameras-data';
import { Camera } from '../../interfaces/camera';
import { AISUSStatusData } from '../../interfaces/aisus-status-data';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {
    private cameras: Camera[] = [];
    private pipes: Pipe[] = [];
    private aisusInitialized: boolean = false;

    constructor(private http: HttpClient, private url: URLService) { }

    public loadAppData(): Observable<boolean> {
        return zip(
            this.http.get<PipesData>(this.url.http('pipes_data')),
            this.http.get<CamerasData>(this.url.http('cameras_data')),
            this.http.get<AISUSStatusData>(this.url.http('aisus_status'))
        ).pipe(
            map(([pipesData, camerasData, aisusStatusData]) => {
                this.pipes = pipesData.pipes;
                this.cameras = camerasData.cameras;
                this.aisusInitialized = aisusStatusData.initialized;

                for (const pipe of this.pipes) {
                    pipe.type = pipe.type.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase();
                }

                return true;
            })
        );
    }

    public getCameras() {
        return this.cameras;
    }

    public getPipes() {
        return this.pipes;
    }

    public isAISUSInitialized() {
        return this.aisusInitialized;
    }
}