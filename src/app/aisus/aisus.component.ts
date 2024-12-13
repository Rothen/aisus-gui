import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppInitService } from '../services/app-init/app-init.service';
import { Location } from '@angular/common';
import { Camera, Pipe } from '../modules/openapi';

@Component({
    selector: 'app-aisus',
    templateUrl: './aisus.component.html',
    styleUrl: './aisus.component.scss'
})
export class AisusComponent {

    public cameras: Camera[] = [];
    public pipes: Pipe[] = [];

    constructor(public route: ActivatedRoute, public location: Location, private appInitService: AppInitService) {
        this.cameras = this.appInitService.getCameras();
        this.pipes = this.appInitService.getPipes();
    }

    public ngOnInit() { }
}
