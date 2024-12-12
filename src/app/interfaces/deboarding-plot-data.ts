import { PhaseOutput } from "./phase_output";

export interface DeboardingPlotData {
    post_processing_output: {
        timestamp: number | null;
    },
    phase_outputs: PhaseOutput[],
    tol_vehicle_offset: number | null;
};

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
    return o
};

const DeboardingPlotDataKey = createEnum({
    phase_outputs: 'phase_outputs',
    tol_vehicle_offset: 'tol_vehicle_offset',
});

export type DeboardingPlotDataKey = keyof (typeof DeboardingPlotDataKey);