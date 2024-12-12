import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeboardingTableData } from '../../interfaces/deboarding-table-data';
import { OccupancyPlanTableData } from '../../interfaces/occupancy-plan-table-data';
import { LateralSwayTableData } from '../../interfaces/lateral-sway-table-data';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TableDataService {
    constructor(private http: HttpClient) { }

    public getDeboardingTableData(pipeId: number): Observable<DeboardingTableData> {
        return this.http.get<DeboardingTableData>(`${environment.httpBasePath}deboarding_table_data/${pipeId}`);
    }

    public getOccupancyPlanTableData(pipeId: number): Observable<OccupancyPlanTableData> {
        return this.http.get<OccupancyPlanTableData>(`${environment.httpBasePath}occupancy_plan_table_data/${pipeId}`);
    }

    public getLateralSwayTableData(pipeId: number): Observable<LateralSwayTableData> {
        return this.http.get<LateralSwayTableData>(`${environment.httpBasePath}lateral_sway_table_data/${pipeId}`);
    }
}
