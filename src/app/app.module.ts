import { environment } from '../environments/environment';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { ApiModule, BASE_PATH } from './modules/openapi';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { AisusComponent } from './aisus/aisus.component';
import { CamerasComponent } from './cameras/cameras.component';
import { CameraTableComponent } from './side-tables/camera-table/camera-table.component';
import { PipesComponent } from './pipes/pipes.component';
import { AreaClearancePipeComponent } from './pipes/area-clearance-pipe/area-clearance-pipe.component';
import { LinePlotComponent } from './plots/line-plot/line-plot.component';
import { AreaClearanceCameraComponent } from './pipes/area-clearance-pipe/area-clearance-camera/area-clearance-camera.component';
import { DeboardingTableComponent } from './side-tables/deboarding-table/deboarding-table.component';
import { DeboardingCameraComponent } from './pipes/deboarding-pipe/deboarding-camera/deboarding-camera.component';
import { PositionalPlotsComponent } from './pipes/deboarding-pipe/positional-plots/positional-plots.component';
import { ProjectionPlotsComponent } from './pipes/deboarding-pipe/projection-plots/projection-plots.component';
import { RFactorDeviationPlotComponent } from './pipes/deboarding-pipe/r-factor-deviation-plot/r-factor-deviation-plot.component';
import { SFactorDeviationPlotComponent } from './pipes/deboarding-pipe/s-factor-deviation-plot/s-factor-deviation-plot.component';
import { TFactorDeviationPlotComponent } from './pipes/deboarding-pipe/t-factor-deviation-plot/t-factor-deviation-plot.component';
import { ThreeDViewComponent } from './pipes/deboarding-pipe/three-d-view/three-d-view.component';
import { UFactorDeviationPlotComponent } from './pipes/deboarding-pipe/u-factor-deviation-plot/u-factor-deviation-plot.component';
import { VFactorDeviationPlotComponent } from './pipes/deboarding-pipe/v-factor-deviation-plot/v-factor-deviation-plot.component';
import { DeboardingPipeComponent } from './pipes/deboarding-pipe/deboarding-pipe.component';
import { DeviationPlotComponent } from './plots/deviation-plot/deviation-plot.component';
import { OccupancyPlanCameraComponent } from './pipes/occupancy-plan-pipe/occupancy-plan-camera/occupancy-paln-camera.component';
import { PeopleHeightPlotComponent } from './pipes/occupancy-plan-pipe/people-height-plot/people-height-plot.component';
import { OccupancyPlanTableComponent } from './side-tables/occupancy-plan-table/occupancy-plan-table.component';
import { SystemComponent } from './system/system.component';
import { LateralSwayPipeComponent } from './pipes/lateral-sway-pipe/lateral-sway-pipe.component';
import { OccupancyPlanPipeComponent } from './pipes/occupancy-plan-pipe/occupancy-plan-pipe.component';
import { CalibrationComponent } from './system/calibration/calibration.component';
import { EventsComponent } from './system/events/events.component';
import { HardwareComponent } from './system/hardware/hardware.component';
import { ImageQualityComponent } from './system/image-quality/image-quality.component';
import { LatencyComponent } from './system/latency/latency.component';
import { LogComponent } from './system/log/log.component';
import { ModelingEngineDemoComponent } from './system/modeling-engine-demo/modeling-engine-demo.component';
import { OverviewComponent } from './system/overview/overview.component';
import { UninitializedComponent } from './uninitialized/uninitialized.component';
import { AppInitService } from './services/app-init/app-init.service';
import { URLService } from './services/aisus-status/url/url.service';

export function initializeApp(appInitService: AppInitService) {
    return () => appInitService.loadAppData();
}

@NgModule({
    declarations: [
        AppComponent,
        AisusComponent,
        CamerasComponent,
        CameraTableComponent,
        PipesComponent,
        AreaClearancePipeComponent,
        LinePlotComponent,
        AreaClearanceCameraComponent,
        DeboardingTableComponent,
        DeboardingCameraComponent,
        ProjectionPlotsComponent,
        PositionalPlotsComponent,
        ThreeDViewComponent,
        RFactorDeviationPlotComponent,
        SFactorDeviationPlotComponent,
        TFactorDeviationPlotComponent,
        UFactorDeviationPlotComponent,
        VFactorDeviationPlotComponent,
        DeboardingPipeComponent,
        DeviationPlotComponent,
        OccupancyPlanTableComponent,
        OccupancyPlanCameraComponent,
        PeopleHeightPlotComponent,
        SystemComponent,
        UninitializedComponent,
        OverviewComponent,
        HardwareComponent,
        ImageQualityComponent,
        LatencyComponent,
        EventsComponent,
        CalibrationComponent,
        ModelingEngineDemoComponent,
        LogComponent,
        LateralSwayPipeComponent,
        LateralSwayPipeComponent,
        LateralSwayPipeComponent,
        OccupancyPlanPipeComponent,
        OccupancyPlanPipeComponent,
        OccupancyPlanPipeComponent
    ],
    imports: [
        ApiModule,
        BrowserModule,
        AppRoutingModule,
        NgbNavModule,
        NgbAccordionModule,
        CommonModule,
        RouterModule,
        RouterOutlet
    ],
    providers: [{
            provide: BASE_PATH,
            useValue: environment.httpbasePath
    }, {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [AppInitService, URLService],
        multi: true,
    },
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
