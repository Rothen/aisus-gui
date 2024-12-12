import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrl: './cameras.component.scss'
})
export class CamerasComponent {
    public cameraId: number | null = null;

    constructor(private route: ActivatedRoute) {}

    public ngOnInit() {
        this.route.params.pipe(
            map(params => params['camera_id'])
        ).subscribe(cameraId => {
            this.cameraId = cameraId;
        });
    }
}
