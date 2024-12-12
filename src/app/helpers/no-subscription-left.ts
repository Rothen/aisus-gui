import { Observable, Subject } from "rxjs";

export function noSubscriptionLeft<T>(callback: () => void): (source$: Observable<T>) => Observable<T> {
    let subscriptionCount = 0;
    const unsubscribeNotifier = new Subject<void>();

    return (source$: Observable<T>) =>
        new Observable<T>((observer) => {
            subscriptionCount++;

            const subscription = source$.subscribe({
                next: (value) => observer.next(value),
                error: (err) => observer.error(err),
                complete: () => observer.complete(),
            });

            return () => {
                subscription.unsubscribe();
                subscriptionCount--;

                if (subscriptionCount === 0) {
                    callback();
                    unsubscribeNotifier.next();
                    unsubscribeNotifier.complete();
                }
            };
        });
}