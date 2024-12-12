import { Component } from '@angular/core';
import { FactorDeviationPlotBaseComponent } from '../factor-deviation-plot-base/factor-deviation-plot-base.component';
import { PhaseOutputKey } from '../../../interfaces/phase_output';

@Component({
    selector: 'app-u-factor-deviation-plot',
    templateUrl: './u-factor-deviation-plot.component.html',
    styleUrl: '../factor-deviation-plot-base/factor-deviation-plot-base.component.scss'
})
export class UFactorDeviationPlotComponent extends FactorDeviationPlotBaseComponent {
    public factor: PhaseOutputKey = "u_factor";
}
