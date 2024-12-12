import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { noSubscriptionLeft } from '../../helpers/no-subscription-left';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService<T> {
    private socket: WebSocket | null = null;
    private messageSubject: Subject<T> = new Subject();

    constructor() { }

    public connect(url: string): void {
        if (this.socket) {
            console.warn('WebSocket is already connected.');
            return;
        }

        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            console.debug('WebSocket connection established.');
        };

        this.socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                this.messageSubject.next(message);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        this.socket.onclose = () => {
            console.debug('WebSocket connection closed.');
            this.socket = null;
        };
    }

    public connectToMessages(url: string): Observable<T> {
        if (!this.socket) {
            this.connect(url);
        }
        return this.onMessages().pipe(
            noSubscriptionLeft(() => {
                this.disconnect();
            })
        );
    }

    public disconnect(): void {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        } else {
            console.warn('WebSocket is not connected.');
        }
    }

    public sendMessage(message: any): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));
        } else {
            console.error('Cannot send message: WebSocket is not open.');
        }
    }

    public onMessages(): Observable<T> {
        return this.messageSubject.asObservable();
    }
}
