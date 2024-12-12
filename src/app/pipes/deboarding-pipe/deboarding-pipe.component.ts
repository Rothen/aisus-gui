import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeboardingTableComponent } from "../../side-tables/deboarding-table/deboarding-table.component";
import { switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommonModule } from '@angular/common';
import { DeboardingCameraComponent } from "./deboarding-camera/deboarding-camera.component";
import { ProjectionPlotsComponent } from './projection-plots/projection-plots.component';
import { PositionalPlotsComponent } from './positional-plots/positional-plots.component';
import { ThreeDViewComponent } from './three-d-view/three-d-view.component';
import { RFactorDeviationPlotComponent } from './r-factor-deviation-plot/r-factor-deviation-plot.component';
import { SFactorDeviationPlotComponent } from './s-factor-deviation-plot/s-factor-deviation-plot.component';
import { TFactorDeviationPlotComponent } from './t-factor-deviation-plot/t-factor-deviation-plot.component';
import { UFactorDeviationPlotComponent } from './u-factor-deviation-plot/u-factor-deviation-plot.component';
import { VFactorDeviationPlotComponent } from './v-factor-deviation-plot/v-factor-deviation-plot.component';
import { ApiModule, DeboardingPipe, DeboardingPipesService } from '../../modules/openapi';

@UntilDestroy()
@Component({
    selector: 'app-deboarding-pipe',
    templateUrl: './deboarding-pipe.component.html',
    styleUrl: './deboarding-pipe.component.scss'
})
export class DeboardingPipeComponent {
    public pipeId: number;
    public display: string;
    public pipeData: DeboardingPipe;

    constructor(private route: ActivatedRoute, private deboardingPipesService: DeboardingPipesService) { }

    public ngOnInit() {
        this.route.params.pipe(
            untilDestroyed (this),
            switchMap((params: any) => {
                this.pipeId = params['pipe_id'];
                this.display = params['display'];
                return this.deboardingPipesService.deboardingPipesDeboardingPipeIdGet(this.pipeId);
            }),
            untilDestroyed(this)
        ).subscribe(data => this.pipeData = data);
    }
}
