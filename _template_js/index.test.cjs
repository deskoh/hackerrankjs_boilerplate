const assert = require("assert").strict;
const { echo } = require("./index.cjs");

describe("JavaScript usage suite", () => {
  it("should be able to execute a test", () => {
    assert.equal(echo("data"), "data");
  });

  after(() => {
    process.stdout.uncork();
  });
});
