import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-occupancy-plan-camera',
    templateUrl: './occupancy-plan-camera.component.html',
    styleUrl: './occupancy-plan-camera.component.scss'
})
export class OccupancyPlanCameraComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input({ required: true }) pipeId: number;
    // @Input({ required: true }) pipeData: OccupancyPlanPipeData;

    public cameraId: number;

    constructor(private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.route.params.pipe(
            map(params => params['camera_id']),
            untilDestroyed(this)
        ).subscribe((camera_id) => {
            this.cameraId = camera_id;
        });
    }

    public ngAfterViewInit(): void {
        
    }

    public ngOnDestroy() {
        
    }
}
