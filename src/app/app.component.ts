import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { interval, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AISUSStatusService } from './modules/openapi';

@UntilDestroy()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    public title = 'GUI';
    public active = 'top';

    constructor(public router: Router, public location: Location, private aisusStatusService: AISUSStatusService) {
        interval(5000).pipe(
            switchMap(() => this.aisusStatusService.statusGet())
        ).pipe(
            untilDestroyed(this)
        ).subscribe(data => {
            if (!data.initialized) {
                this.router.navigate(['/uninitialized']);
            }
        });
    }

    public ngOnInit() { }
}
