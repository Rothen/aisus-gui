import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DeboardingPlotStream } from '../../../services/deboarding-plot-stream/deboarding-plot-stream.service';
import { LinePlotComponent } from '../../../plots/line-plot/line-plot.component';
import { DeboardingPlotData } from '../../../interfaces/deboarding-plot-data';
import { Chart, ChartDataset } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChartsJsService } from '../../../services/chart-js/charts-js.service';
import { PhaseOutputKey } from '../../../interfaces/phase_output';
import { DeboardingPipeData } from '../../../interfaces/deboarding_pipe_data';

@UntilDestroy()
@Component({
    selector: 'app-positional-plots',
    templateUrl: './positional-plots.component.html',
    styleUrl: './positional-plots.component.scss'
})
export class PositionalPlotsComponent implements OnInit {
    @ViewChild('rFactorPlot') rFactorPlotContainer: LinePlotComponent;
    @ViewChild('sFactorPlot') sFactorPlotContainer: LinePlotComponent;
    @ViewChild('hFactorPlot') hFactorPlotContainer: LinePlotComponent;
    @ViewChild('uhFactorPlot') uhFactorPlotContainer: LinePlotComponent;
    @ViewChild('shFactorPlot') shFactorPlotContainer: LinePlotComponent;

    @Input({ required: true }) pipeId: number;
    @Input({ required: true }) pipeData: DeboardingPipeData;

    public xMin = 0;
    public xMax = 6000;
    public labels: number[] = [0, 6000];

    constructor(private deboardingPlotStream: DeboardingPlotStream, private chartJsService: ChartsJsService) { }

    public ngOnInit(): void {
        this.deboardingPlotStream.connectToMessages(this.pipeId).pipe(
            untilDestroyed(this)
        ).subscribe(data => {
            this.updateChartData(data);
        });
    }

    private updateChartData(data: DeboardingPlotData): void {
        if (data.post_processing_output.timestamp == null) {
            return;
        }

        const date = data.post_processing_output.timestamp;

        this.xMin = Math.ceil((date - 5 * 1000) / 1000) * 1000;
        this.xMax = Math.ceil((date + 1000) / 1000) * 1000;
        this.labels = [this.xMin, this.xMax];

        const charts: (Chart | null)[] = [
            this.rFactorPlotContainer.chart,
            this.sFactorPlotContainer.chart,
            this.hFactorPlotContainer.chart,
            this.uhFactorPlotContainer.chart,
            this.shFactorPlotContainer.chart
        ];
        const fields: PhaseOutputKey[] = [
            'r_factor',
            's_factor',
            'h_factor',
            'uh_factor',
            'sh_factor'
        ];

        for (let c = 0; c < charts.length; c++) {
            const chart: Chart | null = charts[c];
            const field: PhaseOutputKey = fields[c];
            if (chart == null) {
                continue;
            }

            for (let i = 0; i < data.phase_outputs.length; i++) {
                const person = data.phase_outputs[i];
                if (person[field] == null) {
                    continue;
                }

                const personLabel = 'Person ' + person.id;

                this.chartJsService.addToDatasetIfExistst(
                    chart,
                    date,
                    person[field],
                    (dataSet: ChartDataset) => dataSet.label == personLabel,
                    (x: number, y: number) => ({
                        label: personLabel,
                        data: [{
                            x: x,
                            y: y
                        }],
                        fill: false,
                        tension: 0.1,
                        pointStyle: false
                    })
                );
            }

            this.chartJsService.cleanupOldDatasetsAndDatapoints(chart);

            chart.update('none');
        }
    }
}
