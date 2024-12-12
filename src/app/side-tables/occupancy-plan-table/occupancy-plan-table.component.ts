import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-occupancy-plan-table',
  templateUrl: './occupancy-plan-table.component.html',
  styleUrl: './occupancy-plan-table.component.scss'
})
export class OccupancyPlanTableComponent {
    @Input({ required: true }) public pipeId: number;
}
