import {load} from "./loader";
import {ParserConfig, Workout} from "./types";

const notReadyYet = new Error("WASM module is not ready yet");

export let onReady: () => void = () => {};
if (!("TML_parse" in global))  {
  load("https://cdn.jsdelivr.net/gh/yanishoss/tml/bin/main.wasm")
    .then(() => onReady())
    .catch(e => {throw e});
}

export function parse(input: string, conf?: ParserConfig): Workout {
  if (!("TML_parse" in global))  {
    throw notReadyYet;
  }

  // @ts-ignore
  const ret = TML_parse(input, conf);

  if (ret.Error !== undefined) {
    throw new Error(ret.Error());
  }

  return ret;
}

export function withDefaultConfig(): ParserConfig {
  if (!("TML_withDefaultConfig" in global))  {
    throw notReadyYet;
  }

  // @ts-ignore
  return TML_withDefaultConfig(input, conf);
}