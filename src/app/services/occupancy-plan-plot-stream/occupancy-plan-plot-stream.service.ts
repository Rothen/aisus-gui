import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { OccupancyPlanPlotData } from '../../interfaces/occupancy-plan-plot-data';
import { Observable } from 'rxjs';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
    providedIn: 'root'
})
export class OccupancyPlanPlotStream {
    constructor(private ws: WebsocketService<OccupancyPlanPlotData>, private url: URLService) { }

    public connectToMessages(pipeId: number): Observable<OccupancyPlanPlotData> {
        return this.ws.connectToMessages(this.url.ws(`stream_occupancy_plan_plot_data/${pipeId}`));
    }

    public disconnect(): void {
        this.ws.disconnect();
    }

    public sendMessage(message: any): void {
        this.ws.sendMessage(message);
    }

    public onMessages(): Observable<OccupancyPlanPlotData> {
        return this.ws.onMessages();
    }
}
