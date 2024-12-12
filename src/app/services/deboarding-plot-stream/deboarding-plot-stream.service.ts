import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { DeboardingPlotData } from '../../interfaces/deboarding-plot-data';
import { Observable } from 'rxjs';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
    providedIn: 'root'
})
export class DeboardingPlotStream {
    constructor(private ws: WebsocketService<DeboardingPlotData>, private url: URLService) { }

    public connectToMessages(pipeId: number): Observable<DeboardingPlotData> {
        return this.ws.connectToMessages(this.url.ws(`stream_deboarding_plot_data/${pipeId}`));
    }

    public disconnect(): void {
        this.ws.disconnect();
    }

    public sendMessage(message: any): void {
        this.ws.sendMessage(message);
    }

    public onMessages(): Observable<DeboardingPlotData> {
        return this.ws.onMessages();
    }
}
