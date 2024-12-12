import { Component, Input, OnDestroy, SimpleChange, ViewChild } from '@angular/core';
import { LinePlotComponent } from '../../../plots/line-plot/line-plot.component';
import { DeboardingPlotStream } from '../../../services/deboarding-plot-stream/deboarding-plot-stream.service';
import { Chart, ChartDataset } from 'chart.js';
import { DeboardingPlotData } from '../../../interfaces/deboarding-plot-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PhaseOutputKey } from '../../../interfaces/phase_output';
import { ChartsJsService } from '../../../services/chart-js/charts-js.service';
import { DeboardingPipeData } from '../../../interfaces/deboarding_pipe_data';

@UntilDestroy()
@Component({
  selector: 'app-projection-plots',
  templateUrl: './projection-plots.component.html',
  styleUrl: './projection-plots.component.scss'
})
export class ProjectionPlotsComponent implements OnDestroy {
    @ViewChild('tFactorPlot') tFactorPlotContainer: LinePlotComponent;
    @ViewChild('vFactorPlot') vFactorPlotContainer: LinePlotComponent;
    @ViewChild('projectedLocationPlot') projectedLocationPlotContainer: LinePlotComponent;
    @ViewChild('tolVehicleOffsetPlot') tolVehicleOffsetPlotContainer: LinePlotComponent;

    @Input({ required: true }) pipeId: number;
    @Input({ required: true }) pipeData: DeboardingPipeData;

    public maxTolVehicleOffset: number = Infinity;
    public Infinity = Infinity;

    constructor(
        private deboardingPlotStream: DeboardingPlotStream,
        private chartJsService: ChartsJsService
    ) { }

    public ngOnInit(): void {
        this.deboardingPlotStream.connectToMessages(this.pipeId).pipe(
            untilDestroyed(this)
        ).subscribe(data => this.updateChartData(data));
    }

    public ngOnChanges(change: SimpleChange) {
        if (this.pipeData.max_tol_vehicle_offset != null) {
            this.maxTolVehicleOffset = Math.ceil(this.pipeData.max_tol_vehicle_offset * 2) / 2;
        }
    }

    public ngOnDestroy() {
        this.deboardingPlotStream.disconnect();
    }

    private updateChartData(data: DeboardingPlotData): void {
        if (data.post_processing_output.timestamp == null) {
            return;
        }

        const date = data.post_processing_output.timestamp;
        const personCharts: (Chart | null)[] = [
            this.tFactorPlotContainer.chart,
            this.vFactorPlotContainer.chart,
            this.projectedLocationPlotContainer.chart
        ];
        const personFields: PhaseOutputKey[] = [
            't_factor',
            'v_factor',
            'projected_location'
        ];

        const deboardingChart: (Chart | null) = this.tolVehicleOffsetPlotContainer.chart;

        for (let c = 0; c < personCharts.length; c++) {
            const chart = personCharts[c];
            const field = personFields[c];
            if (chart == null) {
                continue;
            }

            if (chart.options != null && chart.options.scales != null && chart.options.scales['x'] != null) {
                chart.options.scales['x'].min = Math.ceil((date - 5 * 1000) / 1000) * 1000;
                chart.options.scales['x'].max = Math.ceil((date + 1000) / 1000) * 1000;
                chart.data.labels = [chart.options.scales['x'].min, chart.options.scales['x'].max];
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
                    (dataset: ChartDataset) => dataset.label == personLabel,
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

        if (deboardingChart != null) {
            const tol_vehicle_offset = data.tol_vehicle_offset;

            if (deboardingChart.options != null && deboardingChart.options.scales != null && deboardingChart.options.scales['x'] != null) {
                deboardingChart.options.scales['x'].min = Math.ceil((date - 5 * 1000) / 1000) * 1000;
                deboardingChart.options.scales['x'].max = Math.ceil((date + 1000) / 1000) * 1000;
                deboardingChart.data.labels = [deboardingChart.options.scales['x'].min, deboardingChart.options.scales['x'].max];
            }

            if (tol_vehicle_offset != null) {
                this.chartJsService.addToDatasetIfExistst(
                    deboardingChart, 
                    date,
                    tol_vehicle_offset,
                    (dataset: ChartDataset) => dataset.label == 'Tol Vehicle Offset',
                    (x: number, y: number) => ({
                        label: 'Tol Vehicle Offset',
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

            this.chartJsService.cleanupOldDatasetsAndDatapoints(deboardingChart);

            deboardingChart.update('none');
        }
    }
}
