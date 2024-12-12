import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { DeboardingPlotData } from '../../interfaces/deboarding-plot-data';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DeboardingPlotStream {
    constructor(private ws: WebsocketService<DeboardingPlotData>) { }

    public connectToMessages(pipeId: number): Observable<DeboardingPlotData> {
        return this.ws.connectToMessages(`${environment.wsBasePath}/stream_deboarding_plot_data/${pipeId}`);
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
