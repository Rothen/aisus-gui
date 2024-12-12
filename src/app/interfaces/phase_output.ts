export interface PhaseOutput {
    id: number;
    phase: number;
    projected_location: number;
    h_factor: number;
    r_factor: number;
    s_factor: number;
    sh_factor: number;
    t_factor: number;
    u_factor: number;
    uh_factor: number;
    v_factor: number;
}

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
    return o
}
const PhaseOutputKey = createEnum({
    phase: 'phase',
    projected_location: 'projected_location',
    h_factor: 'h_factor',
    r_factor: 'r_factor',
    s_factor: 's_factor',
    sh_factor: 'sh_factor',
    t_factor: 't_factor',
    u_factor: 'u_factor',
    uh_factor: 'uh_factor',
    v_factor: 'v_factor',
});

export type PhaseOutputKey = keyof (typeof PhaseOutputKey);