import { Component } from '@angular/core';
import { FactorDeviationPlotBaseComponent } from '../factor-deviation-plot-base/factor-deviation-plot-base.component';
import { PhaseOutputKey } from '../../../interfaces/phase_output';

@Component({
    selector: 'app-t-factor-deviation-plot',
    templateUrl: './t-factor-deviation-plot.component.html',
    styleUrl: '../factor-deviation-plot-base/factor-deviation-plot-base.component.scss'
})
export class TFactorDeviationPlotComponent extends FactorDeviationPlotBaseComponent {
    public factor: PhaseOutputKey = "t_factor";
}
