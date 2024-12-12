import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeviationPlotComponent } from '../../../plots/deviation-plot/deviation-plot.component';
import { DeviationData } from '../../../interfaces/deviation-data';
import { switchMap } from 'rxjs';
import { DeboardingPlotStream } from '../../../services/deboarding-plot-stream/deboarding-plot-stream.service';
import { DeviationDataService } from '../../../services/deviation-data/deviation-data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeboardingPlotData } from '../../../interfaces/deboarding-plot-data';
import { PhaseOutputKey } from '../../../interfaces/phase_output';
import { DeboardingPipeData } from '../../../interfaces/deboarding_pipe_data';

@UntilDestroy()
@Component({
    templateUrl: './factor-deviation-plot-base.component.html',
    styleUrl: './factor-deviation-plot-base.component.scss'
})
export abstract class FactorDeviationPlotBaseComponent implements OnInit {
    @ViewChild('deviationPlot') deviationPlotComponent: DeviationPlotComponent;

    @Input({ required: true }) pipeId: number;
    @Input({ required: true }) pipeData: DeboardingPipeData;

    protected abstract factor: PhaseOutputKey;
    public deviationData: DeviationData | null = null;

    constructor(private deboardingPlotStream: DeboardingPlotStream, private deviationDataService: DeviationDataService) { }

    public ngOnInit(): void {
        this.deviationDataService.getDeviationData(this.pipeId, this.factor).pipe(
            untilDestroyed(this),
            switchMap(data => {
                this.deviationData = data;
                return this.deboardingPlotStream.connectToMessages(this.pipeId);
            }),
            untilDestroyed(this)
        ).subscribe(data => {
            this.updateChartData(data);
        });
    }

    private updateChartData(data: DeboardingPlotData): void {
        if (this.deviationPlotComponent == null || this.deviationPlotComponent.chart == null || this.factor == null) {
            return;
        }

        const chart = this.deviationPlotComponent.chart;

        chart.data.datasets = [
            chart.data.datasets[0],
            chart.data.datasets[1],
            chart.data.datasets[2],
            chart.data.datasets[3],
            chart.data.datasets[4],
            chart.data.datasets[5],
            chart.data.datasets[6],
            chart.data.datasets[7],
            chart.data.datasets[8],
            chart.data.datasets[9],
            chart.data.datasets[10],
            chart.data.datasets[11],
            chart.data.datasets[12]
        ];

        for (let i = 0; i < data.phase_outputs.length; i++) {
            const person = data.phase_outputs[i];
            // @ts-ignore: Object is possibly 'null'.
            if (person[this.factor] == null || person.projected_location == null) {
                continue;
            }
            chart.data.datasets.push({
                label: 'Person ' + person.id,
                type: 'scatter',
                data: [{
                    x: person.projected_location,
                    y: person[this.factor]
                }]
            });
        }

        chart.update('none');
    }
}
