import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OccupancyPlanPlotStream } from '../../../services/occupancy-plan-plot-stream/occupancy-plan-plot-stream.service';
import { ActivatedRoute } from '@angular/router';
import { LinePlotComponent } from '../../../plots/line-plot/line-plot.component';
import { OccupancyPlanPlotData } from '../../../interfaces/occupancy-plan-plot-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChartsJsService } from '../../../services/chart-js/charts-js.service';
import { ChartDataset } from 'chart.js';

@UntilDestroy()
@Component({
  selector: 'app-people-height-plot',
  templateUrl: './people-height-plot.component.html',
  styleUrl: './people-height-plot.component.scss'
})
export class PeopleHeightPlotComponent implements OnInit, OnDestroy {
    @ViewChild(LinePlotComponent) linePlotComponent: LinePlotComponent;

    @Input({ required: true }) pipeId: number;
    // @Input({ required: true }) pipeData: OccupancyPlanPipeData;

    constructor(private route: ActivatedRoute, private occupancyPlanDataService: OccupancyPlanPlotStream, private chartJsService: ChartsJsService) { }

    public ngOnInit() {
        if (this.route.parent == null) {
            return;
        }

        this.occupancyPlanDataService.connectToMessages(this.pipeId).pipe(
            untilDestroyed(this)
        ).subscribe(data => {
            this.updateChartData(data);
        });
    }

    public ngOnDestroy() {
        this.occupancyPlanDataService.disconnect();
    }

    public updateChartData(data: OccupancyPlanPlotData): void {
        if (this.linePlotComponent == null || this.linePlotComponent.chart == null) {
            return;
        }
        const date = Date.now();
        const chart = this.linePlotComponent.chart;

        if (chart.options != null && chart.options.scales != null && chart.options.scales['x'] != null) {
            chart.options.scales['x'].min = Math.ceil((date - 5 * 1000) / 1000) * 1000;
            chart.options.scales['x'].max = Math.ceil((date + 1000) / 1000) * 1000;
            chart.data.labels = [chart.options.scales['x'].min, chart.options.scales['x'].max];
        }

        for (let i = 0; i < data.people.length; i++) {
            const person = data.people[i];
            if (person.height == null) {
                continue;
            }
            const personLabel = 'Person ' + person.id;

            this.chartJsService.addToDatasetIfExistst(
                chart,
                date,
                person.height,
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
