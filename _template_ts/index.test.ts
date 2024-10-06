import { strict as assert } from "assert";
import { echo } from "./index.ts";

describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    assert.equal(echo("data"), "data");
  });

  after(() => {
    process.stdout.uncork();
  });
});
