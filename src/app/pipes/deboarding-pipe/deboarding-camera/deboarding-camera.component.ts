import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeboardingPipeData } from '../../../interfaces/deboarding_pipe_data';

@UntilDestroy()
@Component({
    selector: 'app-deboarding-camera',
    templateUrl: './deboarding-camera.component.html',
    styleUrl: './deboarding-camera.component.scss'
})
export class DeboardingCameraComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input({ required: true }) pipeId: number;
    @Input({ required: true }) pipeData: DeboardingPipeData;

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
