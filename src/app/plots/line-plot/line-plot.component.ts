import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import autocolors from 'chartjs-plugin-autocolors';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Color, LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

interface XAxis {
    ticks: { stepSize: number; };
    type: 'time';
    time: { tooltipFormat: string; };
    title: { display: boolean; text: string; };
    beginAtZero?: boolean;
    min?: number;
    max?: number;
}
interface YAxis {
    title: { display: boolean; text: string; };
    beginAtZero: boolean;
    min?: number;
    max?: number;
}

@Component({
    selector: 'app-line-plot',
    templateUrl: './line-plot.component.html',
    styleUrl: './line-plot.component.scss'
})
export class LinePlotComponent implements OnInit, OnChanges {
    @ViewChild('plotCanvas', { static: true }) canvas: ElementRef;

    @Input() title: string;
    @Input() yAxisTitle: string;
    @Input() xMin: any = -Infinity;
    @Input() xMax: any = Infinity;
    @Input() yMin: number = -Infinity;
    @Input() yMax: number = Infinity;
    @Input() labels: any[] | null = null;
    
    public chart: Chart | null = null;

    private xAxisObj: XAxis = {
        ticks: {
            stepSize: 1000
        },
        type: 'time',
        time: {
            tooltipFormat: 'HH:mm:ss'
        },
        title: {
            display: true,
            text: 'Time'
        }
    };

    private yAxisObj: YAxis = {
        title: {
            display: true,
            text: ''
        },
        beginAtZero: true
    };

    constructor() { }

    public ngOnInit(): void {
        this.chart = new Chart(this.canvas.nativeElement, {
            type: 'line',
            data: {
                datasets: []
            },
            options: {
                aspectRatio: 3,
                animation: {
                    duration: 0
                },
                responsive: true,
                scales: {
                    x: this.xAxisObj,
                    y: this.yAxisObj
                }
            },
            plugins: [autocolors]
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.chart == null) {
            return;
        }

        this.yAxisObj.title.text = this.yAxisTitle;
        this.setOrDeleteFieldIf(this.xMin, this.xAxisObj, 'min', -Infinity);
        this.setOrDeleteFieldIf(this.xMax, this.xAxisObj, 'max', Infinity);
        this.setOrDeleteFieldIf(this.yMin, this.yAxisObj, 'min', -Infinity);
        this.setOrDeleteFieldIf(this.yMax, this.yAxisObj, 'max', Infinity);
        this.setOrDeleteFieldIf(this.labels, this.chart.data, 'labels', null);

        if (this.chart.options.scales != null) {
            this.chart.options.scales['x'] = this.xAxisObj;
            this.chart.options.scales['y'] = this.yAxisObj;
        }

        this.chart.update('none');
    }

    private setOrDeleteFieldIf(value: any, obj: any, field: any, nullValue: any = null): void {
        if (value == nullValue) {
            delete obj[field];
        } else {
            obj[field] = value;
        }
    }

    public updateChart(): void {
        if (!this.chart) {
            return;
        }

        this.chart.update();
    }
}
