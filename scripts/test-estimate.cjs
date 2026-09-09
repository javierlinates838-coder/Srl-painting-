/* Offline route tests: no real email or external network calls. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const code = ts.transpileModule(fs.readFileSync('src/app/api/estimate/route.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const valid = { name: 'Test Customer', city: 'Bakersfield', phone: '6615550123', email: '', service: 'Exterior', contactMethod: 'Phone call', details: 'Test exterior project' };
async function run(body, configured = false, fetchResult = 'success') {
  let calls = 0;
  const context = { exports: {}, process: { env: configured ? { RESEND_API_KEY: 'test-only', ESTIMATE_TO_EMAIL: 'test@example.com', ESTIMATE_FROM_EMAIL: 'test@example.com' } : {} },
    require: () => ({ NextResponse: { json: (data, init) => ({ status: init?.status ?? 200, data }) } }),
    AbortSignal,
    fetch: async () => { calls++; if (fetchResult === 'throw') throw new Error('offline'); return { ok: fetchResult === 'success' }; },
  };
  vm.runInNewContext(code, context);
  const result = await context.exports.POST(new Request('http://localhost/api/estimate', { method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body) }));
  return { ...result, calls };
}
(async () => {
  for (const body of [null, [], '{', { ...valid, name: 123 }, { ...valid, phone: 'x' }, { ...valid, email: 'bad' }, { ...valid, city: ' ' }, { ...valid, details: 'x'.repeat(5001) }]) {
    const result = await run(body, true); assert.equal(result.status, 400); assert.equal(result.calls, 0);
  }
  assert.equal((await run('x'.repeat(12001), true)).status, 413);
  assert.equal((await run(valid)).status, 503);
  for (const failure of ['throw', 'failure']) { const r = await run(valid, true, failure); assert.equal(r.status, 502); assert.equal(r.data.ok, false); }
  const success = await run(valid, true); assert.equal(success.status, 200); assert.equal(success.data.ok, true); assert.equal(success.calls, 1);
  console.log('PASS: 13 estimate route cases; no external requests sent.');
})().catch(error => { console.error(error); process.exitCode = 1; });
