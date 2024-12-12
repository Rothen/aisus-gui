import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface OccupancyPlanPipeData {
    
}

@UntilDestroy()
@Component({
    selector: 'app-occupancy-plan-pipe',
    templateUrl: './occupancy-plan-pipe.component.html',
    styleUrl: './occupancy-plan-pipe.component.scss'
})
export class OccupancyPlanPipeComponent {
    public pipeId: number;
    public display: string;
    public pipeData: OccupancyPlanPipeData;

    constructor(private route: ActivatedRoute/*, private occupancyPlanPipeService: OccupancyPlanPipeService*/) { }

    public ngOnInit() {
        /*this.route.params.pipe(
            untilDestroyed(this),
            switchMap(params => {
                this.pipeId = params['pipe_id'];
                this.display = params['display'];
                return this.occupancyPlanPipeService.getPipeData(this.pipeId);
            }),
            untilDestroyed(this)
        ).subscribe(data => this.pipeData = data);*/
        this.route.params.pipe(
            untilDestroyed(this)
        ).subscribe((params: any) => {
            this.pipeId = params['pipe_id'] as number;
            this.display = params['display'] as string;
        });
    }
}
