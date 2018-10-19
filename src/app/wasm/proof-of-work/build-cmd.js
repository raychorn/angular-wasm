exports.cmd = 'emcc -Os src/app/wasm/proof-of-work/sha256/sha256.c src/app/wasm/proof-of-work/proof-of-work.c -o src/assets/wasm/proof-of-work.js -s ALLOW_MEMORY_GROWTH=1 -s EXTRA_EXPORTED_RUNTIME_METHODS="[\'ccall\']" -s EMTERPRETIFY=1 -s EMTERPRETIFY_ASYNC=1 --js-library src/app/wasm/proof-of-work/proof-of-work.emlib.js';