import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-lateral-sway-camera',
    templateUrl: './lateral-sway-camera.component.html',
    styleUrl: './lateral-sway-camera.component.scss'
})
export class LateralSwayCameraComponent implements OnInit, AfterViewInit, OnDestroy {
    public pipeId: number;
    public cameraId: number;

    constructor(private route: ActivatedRoute) { }

    public ngOnInit(): void {
        if (this.route.parent == null) {
            return;
        }

        this.route.parent.params.pipe(
            map(params => params['pipe_id']),
            untilDestroyed(this)
        ).subscribe((pipeId) => {
            this.pipeId = pipeId as number;

            this.route.params.pipe(
                map(params => params['camera_id']),
                untilDestroyed(this)
            ).subscribe((cameraId) => {
                this.cameraId = cameraId as number;
            });
        });
    }

    public ngAfterViewInit(): void {
        
    }

    public ngOnDestroy() {
        
    }
}
