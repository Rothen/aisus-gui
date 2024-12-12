import { Injectable } from '@angular/core';
import { Chart, ChartDataset } from 'chart.js';

@Injectable({
    providedIn: 'root'
})
export class ChartsJsService {

    constructor() { }

    public addToDatasetIfExistst(chart: Chart, x: number, y: number, findFn: (dataset: ChartDataset) => boolean, createFn: (x: number, y: number) => ChartDataset): void {
        const dataSet = chart.data.datasets.find(findFn);

        if (!dataSet) {
            chart.data.datasets.push(createFn(x, y));
        } else {
            dataSet.data.push({
                x: x,
                y: y
            });
        }
    }

    public cleanupOldDatasetsAndDatapoints(chart: Chart): void {
        for (let i = 0; i < chart.data.datasets.length; i++) {
            const dataSet = chart.data.datasets[i];
            // @ts-ignore: Object is possibly 'null'.
            if (dataSet.data.at(-1).x <= chart.options.scales['x'].min) {
                chart.data.datasets.splice(i, 1);
                i--;
            } else {
                for (let j = 0; j < dataSet.data.length; j++) {
                    // @ts-ignore: Object is possibly 'null'.
                    if (dataSet.data[j].x <= chart.options.scales['x'].min) {
                        dataSet.data.splice(j, 1);
                        j--;
                    } else {
                        break;
                    }
                }
            }
        }
    }

    public cleanupOldDatasets(chart: Chart): void {
        for (let i = 0; i < chart.data.datasets.length; i++) {
            const dataSet = chart.data.datasets[i];
            // @ts-ignore: Object is possibly 'null'.
            if (dataSet.data.at(-1).x <= chart.options.scales['x'].min) {
                chart.data.datasets.splice(i, 1);
                i--;
            }
        }
    }

    public cleanupOldDatapoints(chart: Chart): void {
        for (let i = 0; i < chart.data.datasets.length; i++) {
            const dataSet = chart.data.datasets[i];
            for (let j = 0; j < dataSet.data.length; j++) {
                // @ts-ignore: Object is possibly 'null'.
                if (dataSet.data[j].x <= chart.options.scales['x'].min) {
                    dataSet.data.splice(j, 1);
                    j--;
                } else {
                    break;
                }
            }
        }
    }
}
