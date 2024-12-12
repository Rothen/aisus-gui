import { Component } from '@angular/core';
import { FactorDeviationPlotBaseComponent } from '../factor-deviation-plot-base/factor-deviation-plot-base.component';
import { PhaseOutputKey } from '../../../interfaces/phase_output';

@Component({
    selector: 'app-r-factor-deviation-plot',
    templateUrl: './r-factor-deviation-plot.component.html',
    styleUrl: '../factor-deviation-plot-base/factor-deviation-plot-base.component.scss'
})
export class RFactorDeviationPlotComponent extends FactorDeviationPlotBaseComponent {
    public factor: PhaseOutputKey = "r_factor";
}
