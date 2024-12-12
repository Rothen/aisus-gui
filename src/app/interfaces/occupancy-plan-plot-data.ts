interface OccupancyPlanLocationRay {
    direction: number[] | null;
    origin: number[] | null;
};

interface OccupancyPlanProjectionData {
    tracking_id: number;
    camera_id: number;
    timestamp: number;
    kpts: number[];
    location_ray: OccupancyPlanLocationRay;
    location: number[];
    area_3d_id: number;
};

interface OccupancyPlanPostProcessingOutput {
    projection_data: OccupancyPlanProjectionData[];
    timestamp: number;
};

interface OccupancyPlanPerson {
    id: number;
    last_seen: number;
    height: number | null;
    height_history: number[];
};

export interface OccupancyPlanPlotData {
    post_processing_output: OccupancyPlanPostProcessingOutput | null;
    people: OccupancyPlanPerson[];
    people_count: number | null;
    occupied: boolean | null;
    people_heights: number[];
};