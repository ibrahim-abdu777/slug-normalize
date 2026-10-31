const test = require("node:test");
const assert = require("node:assert");
const { slugify } = require("../src/slug");

test("basic slugs", () => {
  assert.strictEqual(slugify("Hello World"), "hello-world");
  assert.strictEqual(slugify("  Über  Café!  "), "uber-cafe");
  assert.strictEqual(slugify("Straße—Test"), "strasse-test");
});

test("packed baseline fixtures still normalize identically", async () => {
  const { syncBaseline } = await import("./baseline.js");
  const results = await syncBaseline();
  assert.strictEqual(results.checked > 0, true);
  assert.strictEqual(results.mismatches, 0);
});
