import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeboardingTableData } from '../../interfaces/deboarding-table-data';
import { OccupancyPlanTableData } from '../../interfaces/occupancy-plan-table-data';
import { LateralSwayTableData } from '../../interfaces/lateral-sway-table-data';
import { URLService } from '../aisus-status/url/url.service';

@Injectable({
    providedIn: 'root'
})
export class TableDataService {
    constructor(private http: HttpClient, private url: URLService) { }

    public getDeboardingTableData(pipeId: number): Observable<DeboardingTableData> {
        return this.http.get<DeboardingTableData>(this.url.http(`deboarding_table_data/${pipeId}`));
    }

    public getOccupancyPlanTableData(pipeId: number): Observable<OccupancyPlanTableData> {
        return this.http.get<OccupancyPlanTableData>(this.url.http(`occupancy_plan_table_data/${pipeId}`));
    }

    public getLateralSwayTableData(pipeId: number): Observable<LateralSwayTableData> {
        return this.http.get<LateralSwayTableData>(this.url.http(`lateral_sway_table_data/${pipeId}`));
    }
}
