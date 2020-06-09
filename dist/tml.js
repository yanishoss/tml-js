!function(){if("undefined"!=typeof global);else if("undefined"!=typeof window)window.global=window;else{if("undefined"==typeof self)throw new Error("cannot export Go (neither global, window nor self is defined)");self.global=self}global.require||"undefined"==typeof require||(global.require=require),!global.fs&&global.require&&(global.fs=require("fs"));var e=function(){var e=new Error("not implemented");return e.code="ENOSYS",e};if(!global.fs){var t="";global.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync:function(e,n){var r=(t+=i.decode(n)).lastIndexOf("\n");return-1!=r&&(console.log(t.substr(0,r)),t=t.substr(r+1)),n.length},write:function(t,n,r,i,o,s){0===r&&i===n.length&&null===o?s(null,this.writeSync(t,n)):s(e())},chmod:function(t,n,r){r(e())},chown:function(t,n,r,i){i(e())},close:function(t,n){n(e())},fchmod:function(t,n,r){r(e())},fchown:function(t,n,r,i){i(e())},fstat:function(t,n){n(e())},fsync:function(e,t){t(null)},ftruncate:function(t,n,r){r(e())},lchown:function(t,n,r,i){i(e())},link:function(t,n,r){r(e())},lstat:function(t,n){n(e())},mkdir:function(t,n,r){r(e())},open:function(t,n,r,i){i(e())},read:function(t,n,r,i,o,s){s(e())},readdir:function(t,n){n(e())},readlink:function(t,n){n(e())},rename:function(t,n,r){r(e())},rmdir:function(t,n){n(e())},stat:function(t,n){n(e())},symlink:function(t,n,r){r(e())},truncate:function(t,n,r){r(e())},unlink:function(t,n){n(e())},utimes:function(t,n,r,i){i(e())}}}if(global.process||(global.process={getuid:function(){return-1},getgid:function(){return-1},geteuid:function(){return-1},getegid:function(){return-1},getgroups:function(){throw e()},pid:-1,ppid:-1,umask:function(){throw e()},cwd:function(){throw e()},chdir:function(){throw e()}}),!global.crypto){var n=require("crypto");global.crypto={getRandomValues:function(e){n.randomFillSync(e)}}}global.performance||(global.performance={now:function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}}),global.TextEncoder||(global.TextEncoder=require("util").TextEncoder),global.TextDecoder||(global.TextDecoder=require("util").TextDecoder);var r=new TextEncoder("utf-8"),i=new TextDecoder("utf-8");if(global.Go=function(){function e(){var e=this;this.argv=["js"],this.env={},this.exit=function(e){0!==e&&console.warn("exit code:",e)},this._exitPromise=new Promise(function(t){e._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;var t=function(t,n){e.mem.setUint32(t+0,n,!0),e.mem.setUint32(t+4,Math.floor(n/4294967296),!0)},n=function(t){return e.mem.getUint32(t+0,!0)+4294967296*e.mem.getInt32(t+4,!0)},o=function(t){var n=e.mem.getFloat64(t,!0);if(0!==n){if(!isNaN(n))return n;var r=e.mem.getUint32(t,!0);return e._values[r]}},s=function(t,n){if("number"==typeof n)return isNaN(n)?(e.mem.setUint32(t+4,2146959360,!0),void e.mem.setUint32(t,0,!0)):0===n?(e.mem.setUint32(t+4,2146959360,!0),void e.mem.setUint32(t,1,!0)):void e.mem.setFloat64(t,n,!0);switch(n){case void 0:return void e.mem.setFloat64(t,0,!0);case null:return e.mem.setUint32(t+4,2146959360,!0),void e.mem.setUint32(t,2,!0);case!0:return e.mem.setUint32(t+4,2146959360,!0),void e.mem.setUint32(t,3,!0);case!1:return e.mem.setUint32(t+4,2146959360,!0),void e.mem.setUint32(t,4,!0)}var r=e._ids.get(n);void 0===r&&(void 0===(r=e._idPool.pop())&&(r=e._values.length),e._values[r]=n,e._goRefCounts[r]=0,e._ids.set(n,r)),e._goRefCounts[r]++;var i=1;switch(typeof n){case"string":i=2;break;case"symbol":i=3;break;case"function":i=4}e.mem.setUint32(t+4,2146959360|i,!0),e.mem.setUint32(t,r,!0)},u=function(t){var r=n(t+0),i=n(t+8);return new Uint8Array(e._inst.exports.mem.buffer,r,i)},a=function(e){for(var t=n(e+0),r=n(e+8),i=new Array(r),s=0;s<r;s++)i[s]=o(t+8*s);return i},c=function(t){var r=n(t+0),o=n(t+8);return i.decode(new DataView(e._inst.exports.mem.buffer,r,o))},l=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":function(t){var n=e.mem.getInt32(t+8,!0);e.exited=!0,delete e._inst,delete e._values,delete e._goRefCounts,delete e._ids,delete e._idPool,e.exit(n)},"runtime.wasmWrite":function(t){var r=n(t+8),i=n(t+16),o=e.mem.getInt32(t+24,!0);fs.writeSync(r,new Uint8Array(e._inst.exports.mem.buffer,i,o))},"runtime.resetMemoryDataView":function(t){e.mem=new DataView(e._inst.exports.mem.buffer)},"runtime.nanotime1":function(e){t(e+8,1e6*(l+performance.now()))},"runtime.walltime1":function(n){var r=(new Date).getTime();t(n+8,r/1e3),e.mem.setInt32(n+16,r%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":function(t){var r=e._nextCallbackTimeoutID;e._nextCallbackTimeoutID++,e._scheduledTimeouts.set(r,setTimeout(function(){for(e._resume();e._scheduledTimeouts.has(r);)console.warn("scheduleTimeoutEvent: missed timeout event"),e._resume()},n(t+8)+1)),e.mem.setInt32(t+16,r,!0)},"runtime.clearTimeoutEvent":function(t){var n=e.mem.getInt32(t+8,!0);clearTimeout(e._scheduledTimeouts.get(n)),e._scheduledTimeouts.delete(n)},"runtime.getRandomData":function(e){crypto.getRandomValues(u(e+8))},"syscall/js.finalizeRef":function(t){var n=e.mem.getUint32(t+8,!0);if(e._goRefCounts[n]--,0===e._goRefCounts[n]){var r=e._values[n];e._values[n]=null,e._ids.delete(r),e._idPool.push(n)}},"syscall/js.stringVal":function(e){s(e+24,c(e+8))},"syscall/js.valueGet":function(t){var n=Reflect.get(o(t+8),c(t+16));t=e._inst.exports.getsp(),s(t+32,n)},"syscall/js.valueSet":function(e){Reflect.set(o(e+8),c(e+16),o(e+32))},"syscall/js.valueDelete":function(e){Reflect.deleteProperty(o(e+8),c(e+16))},"syscall/js.valueIndex":function(e){s(e+24,Reflect.get(o(e+8),n(e+16)))},"syscall/js.valueSetIndex":function(e){Reflect.set(o(e+8),n(e+16),o(e+24))},"syscall/js.valueCall":function(t){try{var n=o(t+8),r=Reflect.get(n,c(t+16)),i=a(t+32),u=Reflect.apply(r,n,i);t=e._inst.exports.getsp(),s(t+56,u),e.mem.setUint8(t+64,1)}catch(n){s(t+56,n),e.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":function(t){try{var n=o(t+8),r=a(t+16),i=Reflect.apply(n,void 0,r);t=e._inst.exports.getsp(),s(t+40,i),e.mem.setUint8(t+48,1)}catch(n){s(t+40,n),e.mem.setUint8(t+48,0)}},"syscall/js.valueNew":function(t){try{var n=o(t+8),r=a(t+16),i=Reflect.construct(n,r);t=e._inst.exports.getsp(),s(t+40,i),e.mem.setUint8(t+48,1)}catch(n){s(t+40,n),e.mem.setUint8(t+48,0)}},"syscall/js.valueLength":function(e){t(e+16,parseInt(o(e+8).length))},"syscall/js.valuePrepareString":function(e){var n=r.encode(String(o(e+8)));s(e+16,n),t(e+24,n.length)},"syscall/js.valueLoadString":function(e){var t=o(e+8);u(e+16).set(t)},"syscall/js.valueInstanceOf":function(t){e.mem.setUint8(t+24,o(t+8)instanceof o(t+16))},"syscall/js.copyBytesToGo":function(n){var r=u(n+8),i=o(n+32);if(i instanceof Uint8Array){var s=i.subarray(0,r.length);r.set(s),t(n+40,s.length),e.mem.setUint8(n+48,1)}else e.mem.setUint8(n+48,0)},"syscall/js.copyBytesToJS":function(n){var r=o(n+8),i=u(n+16);if(r instanceof Uint8Array){var s=i.subarray(0,r.length);r.set(s),t(n+40,s.length),e.mem.setUint8(n+48,1)}else e.mem.setUint8(n+48,0)},debug:function(e){console.log(e)}}}}var t=e.prototype;return t.run=function(e){try{var t=this;t._inst=e,t.mem=new DataView(t._inst.exports.mem.buffer),t._values=[NaN,0,null,!0,!1,global,t],t._goRefCounts=[],t._ids=new Map,t._idPool=[],t.exited=!1;var n=4096,i=function(e){var i=n,o=r.encode(e+"\0");return new Uint8Array(t.mem.buffer,n,o.length).set(o),(n+=o.length)%8!=0&&(n+=8-n%8),i},o=t.argv.length,s=[];t.argv.forEach(function(e){s.push(i(e))}),s.push(0),Object.keys(t.env).sort().forEach(function(e){s.push(i(e+"="+t.env[e]))}),s.push(0);var u=n;return s.forEach(function(e){t.mem.setUint32(n,e,!0),t.mem.setUint32(n+4,0,!0),n+=8}),t._inst.exports.run(o,u),t.exited&&t._resolveExitPromise(),Promise.resolve(t._exitPromise).then(function(){})}catch(e){return Promise.reject(e)}},t._resume=function(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()},t._makeFuncWrapper=function(e){var t=this;return function(){var n={id:e,this:this,args:arguments};return t._pendingEvent=n,t._resume(),n.result}},e}(),global.require&&global.require.main===module&&global.process&&global.process.versions&&!global.process.versions.electron){process.argv.length<3&&(console.error("usage: go_js_wasm_exec [wasm binary] [arguments]"),process.exit(1));var o=new Go;o.argv=process.argv.slice(2),o.env=Object.assign({TMPDIR:require("os").tmpdir()},process.env),o.exit=process.exit,WebAssembly.instantiate(fs.readFileSync(process.argv[2]),o.importObject).then(function(e){return process.on("exit",function(e){0!==e||o.exited||(o._pendingEvent={id:0},o._resume())}),o.run(e.instance)}).catch(function(e){console.error(e),process.exit(1)})}}();var e=new global.Go;WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=function(e,t){try{return Promise.resolve(e).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(e){return Promise.resolve(WebAssembly.instantiate(e,t))})})}catch(e){return Promise.reject(e)}});var t=new Error("WASM module is not ready yet");"TML"in global||function(t){try{return Promise.resolve(function(t,n){try{var r=Promise.resolve(WebAssembly.instantiateStreaming(fetch("https://cdn.jsdelivr.net/gh/yanishoss/tml@v1.1.3/bin/main.wasm"),e.importObject)).then(function(t){return Promise.resolve(e.run(t.instance)).then(function(){})})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}().then(function(){}).catch(function(e){throw e}),exports.onReady=function(){},exports.parse=function(e,n){if(!("TML"in global))throw t;var r=TML.parse(e,n);if(void 0!==r.Error)throw new Error(r.Error());return r},exports.withDefaultConfig=function(){if(!("TML"in global))throw t;return TML.withDefaultConfig(input,conf)};
//# sourceMappingURL=tml.js.map
