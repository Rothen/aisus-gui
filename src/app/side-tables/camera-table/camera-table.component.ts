import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-camera-table',
  templateUrl: './camera-table.component.html',
  styleUrl: './camera-table.component.scss'
})
export class CameraTableComponent {
    @Input() cameraId: number | null;
}
