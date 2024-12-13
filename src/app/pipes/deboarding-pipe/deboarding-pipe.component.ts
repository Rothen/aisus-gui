import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeboardingPipe, DeboardingPipesService } from '../../modules/openapi';

@UntilDestroy()
@Component({
    selector: 'app-deboarding-pipe',
    templateUrl: './deboarding-pipe.component.html',
    styleUrl: './deboarding-pipe.component.scss'
})
export class DeboardingPipeComponent {
    public pipeId: number;
    public display: string;
    public pipeData: DeboardingPipe;

    constructor(private route: ActivatedRoute, private deboardingPipesService: DeboardingPipesService) { }

    public ngOnInit() {
        this.route.params.pipe(
            untilDestroyed (this),
            switchMap((params: any) => {
                this.pipeId = params['pipe_id'];
                this.display = params['display'];
                return this.deboardingPipesService.deboardingPipesPipeIdGet(this.pipeId);
            }),
            untilDestroyed(this)
        ).subscribe(data => this.pipeData = data);
    }
}
