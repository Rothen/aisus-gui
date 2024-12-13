import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, timer } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeboardingPipeData } from '../../interfaces/deboarding_pipe_data';
import { DeboardingPipesService, DeboardingPipeTableData } from '../../modules/openapi';

@UntilDestroy()
@Component({
  selector: 'app-deboarding-table',
  templateUrl: './deboarding-table.component.html',
  styleUrl: './deboarding-table.component.scss'
})
export class DeboardingTableComponent {
    @Input({ required: true }) pipeId: number;
    @Input({ required: true }) pipeData: DeboardingPipeData;

    public tableData: DeboardingPipeTableData | null = null;

    constructor(private route: ActivatedRoute, private deboardingPipesService: DeboardingPipesService) { }

    public ngOnInit(): void {
        timer(0, 1000).pipe(
            switchMap(() => this.deboardingPipesService.deboardingPipesPipeIdTableDataGet(this.pipeId))
        ).pipe(
            untilDestroyed(this)
        ).subscribe(tableData => this.tableData = tableData);
    }
}
