import { Component } from '@angular/core';
import { FactorDeviationPlotBaseComponent } from '../factor-deviation-plot-base/factor-deviation-plot-base.component';
import { PhaseOutputKey } from '../../../interfaces/phase_output';

@Component({
    selector: 'app-s-factor-deviation-plot',
    templateUrl: './s-factor-deviation-plot.component.html',
    styleUrl: '../factor-deviation-plot-base/factor-deviation-plot-base.component.scss'
})
export class SFactorDeviationPlotComponent extends FactorDeviationPlotBaseComponent {
    public factor: PhaseOutputKey = "s_factor";
}
