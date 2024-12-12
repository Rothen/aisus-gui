import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system/system.component';
import { OverviewComponent } from './system/overview/overview.component';
import { HardwareComponent } from './system/hardware/hardware.component';
import { ImageQualityComponent } from './system/image-quality/image-quality.component';
import { LatencyComponent } from './system/latency/latency.component';
import { EventsComponent } from './system/events/events.component';
import { CalibrationComponent } from './system/calibration/calibration.component';
import { ModelingEngineDemoComponent } from './system/modeling-engine-demo/modeling-engine-demo.component';
import { LogComponent } from './system/log/log.component';

import { CamerasComponent } from './cameras/cameras.component';

import { PipesComponent } from './pipes/pipes.component';
import { DeboardingPipeComponent } from './pipes/deboarding-pipe/deboarding-pipe.component';
import { LateralSwayPipeComponent } from './pipes/lateral-sway-pipe/lateral-sway-pipe.component';
import { OccupancyPlanPipeComponent } from './pipes/occupancy-plan-pipe/occupancy-plan-pipe.component';
import { AreaClearancePipeComponent } from './pipes/area-clearance-pipe/area-clearance-pipe.component';
import { InitializedGuard } from './helpers/initialized.guard';
import { UninitializedGuard } from './helpers/uninitialized.guard';
import { UninitializedComponent } from './uninitialized/uninitialized.component';
import { AisusComponent } from './aisus/aisus.component';

const routes: Routes = [
    { path: 'initialize', component: UninitializedComponent, canActivate: [UninitializedGuard] },
    {
        path: 'aisus', component: AisusComponent, canActivate: [InitializedGuard], children: [
            {
                path: 'system', component: SystemComponent, children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: OverviewComponent },
                    { path: 'hardware', component: HardwareComponent },
                    { path: 'image_quality', component: ImageQualityComponent },
                    { path: 'latency', component: LatencyComponent },
                    { path: 'events', component: EventsComponent },
                    { path: 'calibration', component: CalibrationComponent },
                    { path: 'modeling_engine_demo', component: ModelingEngineDemoComponent },
                    { path: 'log', component: LogComponent }
                ]
            },
            { path: 'cameras/:camera_id', component: CamerasComponent },
            {
                path: 'pipes', component: PipesComponent,
                children: [
                    {
                        path: 'deboarding/:pipe_id', component: DeboardingPipeComponent
                    }, {
                        path: 'deboarding/:pipe_id/:display', component: DeboardingPipeComponent
                    }, {
                        path: 'deboarding/:pipe_id/:display/:camera_id', component: DeboardingPipeComponent
                    },

                    {
                        path: 'area_clearance/:pipe_id', component: AreaClearancePipeComponent
                    }, {
                        path: 'area_clearance/:pipe_id/:display', component: AreaClearancePipeComponent
                    }, {
                        path: 'area_clearance/:pipe_id/:display/:camera_id', component: AreaClearancePipeComponent
                    },

                    {
                        path: 'lateral_sway/:pipe_id', component: LateralSwayPipeComponent
                    }, {
                        path: 'lateral_sway/:pipe_id/:display', component: LateralSwayPipeComponent
                    }, {
                        path: 'lateral_sway/:pipe_id/:display/:camera_id', component: LateralSwayPipeComponent
                    },

                    {
                        path: 'occupancy_plan/:pipe_id', component: OccupancyPlanPipeComponent
                    }, {
                        path: 'occupancy_plan/:pipe_id/:display', component: OccupancyPlanPipeComponent
                    }, {
                        path: 'occupancy_plan/:pipe_id/:display/:camera_id', component: OccupancyPlanPipeComponent
                    }
                ]
            }]
    },
    { path: '', redirectTo: '/aisus/system', pathMatch: 'full' },
    { path: '**', redirectTo: '/aisus/system' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
