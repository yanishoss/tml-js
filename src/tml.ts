import {load} from "./loader";
import {ParserConfig, Workout} from "./types";

const notReadyYet = new Error("WASM module is not ready yet");

let ready = false;
if (!("TML" in global))  {
  load("https://raw.githubusercontent.com/yanishoss/tml/v1.1.3/bin/main.wasm")
    .then(() => ready = true)
    .catch(e => {throw e});
}

export function parse(input: string, conf?: ParserConfig): Workout {
  if (!("TML" in global))  {
    throw notReadyYet;
  }

  // @ts-ignore
  return TML.parse(input, conf);
}

export function withDefaultConfig(): ParserConfig {
  if (!("TML" in global))  {
    throw notReadyYet;
  }

  // @ts-ignore
  return TML.withDefaultConfig(input, conf);
}