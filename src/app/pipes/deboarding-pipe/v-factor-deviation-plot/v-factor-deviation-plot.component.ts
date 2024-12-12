import { Component } from '@angular/core';
import { FactorDeviationPlotBaseComponent } from '../factor-deviation-plot-base/factor-deviation-plot-base.component';
import { PhaseOutputKey } from '../../../interfaces/phase_output';

@Component({
    selector: 'app-v-factor-deviation-plot',
    templateUrl: './v-factor-deviation-plot.component.html',
    styleUrl: '../factor-deviation-plot-base/factor-deviation-plot-base.component.scss'
})
export class VFactorDeviationPlotComponent extends FactorDeviationPlotBaseComponent {
    public factor: PhaseOutputKey = "v_factor";
}
