import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-deviation',
    templateUrl: './deviation.component.html',
    styleUrl: './deviation.component.scss'
})
export class DeviationComponent {
    
}
