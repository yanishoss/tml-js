import { ParserConfig, Workout } from "./types";
export declare let onReady: () => void;
export declare function parse(input: string, conf?: ParserConfig): Workout;
export declare function withDefaultConfig(): ParserConfig;
