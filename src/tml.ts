import {load} from "./loader";
import {ParserConfig, Workout} from "./types";

const notReadyYet = new Error("WASM module is not ready yet");

export let onReady: () => void = () => {};
if (!("TML" in global))  {
  load("https://cdn.jsdelivr.net/gh/yanishoss/tml/bin/main.wasm")
    .then(() => onReady())
    .catch(e => {throw e});
}

export function parse(input: string, conf?: ParserConfig): Workout {
  if (!("TML" in global))  {
    throw notReadyYet;
  }

  // @ts-ignore
  const ret = TML.parse(input, conf);

  if (ret.Error !== undefined) {
    throw new Error(ret.Error());
  }

  return ret;
}

export function withDefaultConfig(): ParserConfig {
  if (!("TML" in global))  {
    throw notReadyYet;
  }

  // @ts-ignore
  return TML.withDefaultConfig(input, conf);
}