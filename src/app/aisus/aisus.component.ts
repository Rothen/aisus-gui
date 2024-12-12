import { Component } from '@angular/core';
import { Camera } from '../interfaces/camera';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PipesService } from '../services/pipes/pipes.service';
import { AppInitService } from '../services/app-init/app-init.service';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, Location } from '@angular/common';
import { Pipe } from '../interfaces/pipe';

@Component({
    selector: 'app-aisus',
    templateUrl: './aisus.component.html',
    styleUrl: './aisus.component.scss'
})
export class AisusComponent {

    public cameras: Camera[] = [];
    public pipes: Pipe[] = [];

    constructor(public route: ActivatedRoute, public location: Location, private pipesServcie: PipesService, private appInitService: AppInitService) {
        this.cameras = this.appInitService.getCameras();
        this.pipes = this.appInitService.getPipes();
    }

    public ngOnInit() { }
}
