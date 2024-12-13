import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map, Observable, zip } from 'rxjs';
import { AISUSStatus, AISUSStatusService, Camera, CamerasService, Pipe, PipesService } from '../../modules/openapi';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {
    private cameras: Camera[] = [];
    private pipes: Pipe[] = [];
    private aisusStatus: AISUSStatus = { initialized: false };

    constructor(private http: HttpClient, private pipesService: PipesService, private camerasService: CamerasService, private aisusStatusService: AISUSStatusService) { }

    public loadAppData(): Observable<boolean> {
        return zip(
            this.pipesService.pipesGet(),
            this.camerasService.camerasGet(),
            this.aisusStatusService.statusGet()
        ).pipe(
            map(([pipesData, camerasData, aisusStatusData]) => {
                this.pipes = pipesData;
                this.cameras = camerasData;
                this.aisusStatus = aisusStatusData;

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
        return this.aisusStatus.initialized;
    }
}