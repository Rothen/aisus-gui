import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map, Observable, zip } from 'rxjs';
import { PipesData } from '../../interfaces/pipes-data';
import { Pipe } from '../../interfaces/pipe';
import { CamerasData } from '../../interfaces/cameras-data';
import { Camera } from '../../interfaces/camera';
import { environment } from '../../../environments/environment';
import { AISUSStatus, AISUSStatusService } from '../../modules/openapi';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {
    private cameras: Camera[] = [];
    private pipes: Pipe[] = [];
    private aisusInitialized: boolean = false;

    constructor(private http: HttpClient, private aisusStatusService: AISUSStatusService) { }

    public loadAppData(): Observable<boolean> {
        return zip(
            this.http.get<PipesData>(`${environment.httpBasePath}/pipes_data`),
            this.http.get<CamerasData>(`${environment.httpBasePath}/cameras_data`),
            this.aisusStatusService.statusGet()
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