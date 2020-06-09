import "../vendor/wasm_exec.js";

// @ts-ignore
export const go = new global.Go();

if (!WebAssembly.instantiateStreaming) {
  WebAssembly.instantiateStreaming = async (resp, importObject) => {
    const source = await(await resp).arrayBuffer();
    return await WebAssembly.instantiate(source, importObject);
  };
}

export const load: (path: string) => Promise<void> = async (path) => {
  try {
    const {instance} = await WebAssembly.instantiateStreaming(fetch(path).then(r => {r = new Response(r.body, r); r.headers.set("Content-Type", "application/wasm"); return r}), go.importObject);

    await go.run(instance);
  } catch (e) {
    throw e;
  }
};