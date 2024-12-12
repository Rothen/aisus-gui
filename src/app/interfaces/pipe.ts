import { Camera } from "./camera";

export interface Pipe {
    id: number;
    name: string;
    type: string;
    cameras: Camera[];
}