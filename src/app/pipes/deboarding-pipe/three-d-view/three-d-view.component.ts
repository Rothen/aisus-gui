import { Component, Input } from '@angular/core';
import { DeboardingPipeData } from '../../../interfaces/deboarding_pipe_data';

@Component({
  selector: 'app-three-d-view',
  templateUrl: './three-d-view.component.html',
  styleUrl: './three-d-view.component.scss'
})
export class ThreeDViewComponent {
    @Input({ required: true }) pipeId: number;
    @Input({ required: true }) pipeData: DeboardingPipeData;
}
