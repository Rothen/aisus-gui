import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import autocolors from 'chartjs-plugin-autocolors';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { deviationBand } from './deviation-band'
import { DeviationData } from '../../interfaces/deviation-data';

interface BoundDataset {
    type: string;
    label: string;
    borderColor: string;
    data: {x: number; y: number;}[];
    pointStyle: boolean;
};

@Component({
    selector: 'app-deviation-plot',
    templateUrl: './deviation-plot.component.html',
    styleUrl: './deviation-plot.component.scss'
})
export class DeviationPlotComponent implements OnInit{
    @ViewChild('plotCanvas', { static: true }) canvas: ElementRef;

    @Input() title: string;
    @Input() yAxisTitle: string;
    @Input() xMin: any;
    @Input() xMax: any;
    @Input() data: any[] = [];
    @Input({ required: true }) deviationData: DeviationData | null;

    public chart: Chart;

    constructor() { }

    public ngOnInit(): void {
        if (this.deviationData == null) {
            return;
        }
        const datasets = [{
            label: 'false',
            type: 'scatter',
            data: []
        }];
        const bandsToDraw: { x: number; y: number; }[][] = [];
        const rgbColors = [
            'rgba(46, 192, 113, 1.0)',
            'rgba(115, 192, 53, 1.0)',
            'rgba(192, 160, 0, 1.0)',
            'rgba(192, 120, 0, 1.0)',
            'rgba(192, 80, 71, 1.0)',
            'rgba(192, 60, 60, 1.0)'
        ];
        let minY = Infinity;
        let maxY = -Infinity;

        for (let b = 0; b < this.deviationData.bands.length; b++) {
            const band = this.deviationData.bands[b];
            const upperBoundDataset: {type: string; label: string; borderColor: string; data: { x: number; y: number; }[]; pointStyle: string | boolean; } = {
                type: 'line',
                label: 'false',
                borderColor: rgbColors[b],
                data: [],
                pointStyle: false
            };
            const lowerBoundDataset: {type: string; label: string; borderColor: string; data: { x: number; y: number; }[]; pointStyle: string | boolean; } = {
                type: 'line',
                label: 'false',
                borderColor: rgbColors[b],
                data: [],
                pointStyle: false
            };
            for (let i = 0; i < this.deviationData.xs.length; i++) {
                upperBoundDataset.data.push({
                    x: this.deviationData.xs[i],
                    y: band.upper[i]
                });
                lowerBoundDataset.data.push({
                    x: this.deviationData.xs[i],
                    y: band.lower[i]
                });

                minY = Math.min(minY, band.lower[i]);
                maxY = Math.max(maxY, band.upper[i]);
            }

            // @ts-ignore: Unreachable code error
            datasets.push(upperBoundDataset);
            // @ts-ignore: Unreachable code error
            datasets.push(lowerBoundDataset);

            bandsToDraw.unshift(upperBoundDataset.data);
            bandsToDraw.push(lowerBoundDataset.data);
        }

        this.chart = new Chart(this.canvas.nativeElement, {
            data: {
                // @ts-ignore: Unreachable code error
                datasets: datasets
            },
            options: {
                aspectRatio: 1,
                animation: {
                    duration: 0
                },
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Projected Location',
                        },
                        min: 0,
                        max: 1
                    },
                    y: {
                        title: {
                            display: true,
                            text: this.yAxisTitle
                        },
                        min: minY - (maxY - minY) * 0.1,
                        max: maxY + (maxY - minY) * 0.1
                    }
                },
                plugins: {
                    tooltip: {
                        filter: function (dataSet) {
                            return dataSet.dataset.type === 'scatter';
                        }
                    },
                    legend: {
                        labels: {
                            filter: function (legendItem, chartData) {
                                return legendItem.text !== 'false';
                            }
                        }
                    }
                }
            },
            plugins: [
                deviationBand(bandsToDraw, [
                    'rgba(192, 60, 60, 0.5)',
                    'rgba(192, 80, 71, 0.5)',
                    'rgba(192, 120, 0, 0.5)',
                    'rgba(192, 160, 0, 0.5)',
                    'rgba(115, 192, 53, 0.5)',
                    'rgba(46, 192, 113, 0.5)',
                    'rgba(115, 192, 53, 0.5)',
                    'rgba(192, 160, 0, 0.5)',
                    'rgba(192, 120, 0, 0.5)',
                    'rgba(192, 80, 71, 0.5)',
                    'rgba(192, 60, 60, 0.5)'
                ]),
                autocolors
            ]
        });
    }

    public updateChart(): void {
        if (!this.chart) {
            return;
        }

        this.chart.update();
    }
}
