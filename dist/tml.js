var t=new global.Go;WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=function(t,e){try{return Promise.resolve(t).then(function(t){return Promise.resolve(t.arrayBuffer()).then(function(t){return Promise.resolve(WebAssembly.instantiate(t,e))})})}catch(t){return Promise.reject(t)}});var e=new Error("WASM module is not ready yet");"TML"in global||function(e){try{return Promise.resolve(function(e,r){try{var n=Promise.resolve(WebAssembly.instantiateStreaming(fetch("https://cdn.jsdelivr.net/gh/yanishoss/tml@v1.1.3/bin/main.wasm"),t.importObject)).then(function(e){return Promise.resolve(t.run(e.instance)).then(function(){})})}catch(t){return r(t)}return n&&n.then?n.then(void 0,r):n}(0,function(t){throw t}))}catch(t){return Promise.reject(t)}}().then(function(){}).catch(function(t){throw t}),exports.onReady=function(){},exports.parse=function(t,r){if(!("TML"in global))throw e;var n=TML.parse(t,r);if(void 0!==n.Error)throw new Error(n.Error());return n},exports.withDefaultConfig=function(){if(!("TML"in global))throw e;return TML.withDefaultConfig(input,conf)};
//# sourceMappingURL=tml.js.map
