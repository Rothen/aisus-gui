import { Component } from '@angular/core';
import { AISUSStatusService } from '../services/aisus-status/aisus-status.service';
import { AppInitService } from '../services/app-init/app-init.service';
import { Router } from '@angular/router';
import { interval, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-uninitialized',
  templateUrl: './uninitialized.component.html',
  styleUrl: './uninitialized.component.scss'
})
export class UninitializedComponent {
    constructor(private router: Router, private aisusStatusService: AISUSStatusService, private appInitService: AppInitService) { }

    public ngOnInit(): void {
        interval(5000).pipe(
            switchMap(() => this.aisusStatusService.isAISUSInitialized())
        ).pipe(
            untilDestroyed(this)
        ).subscribe(data => {
            if (!data.initialized) {
                this.navigateToHome();
            }
        });
    }

    public initializeAISUS(): void {
        this.aisusStatusService.initializeAISUS().pipe(
            switchMap(() => this.appInitService.loadAppData())
        )
        .subscribe(() => {
            this.navigateToHome();
        });
    }

    private navigateToHome(): void {
        this.router.navigate(['/']);
    }
}
