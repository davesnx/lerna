import assert from "assert";

import Location from "../src/Location";

describe.only("Location", () => {
  let loc

  beforeEach(() => {
    loc = new Location(
      "/path/to/package"
    );
  });

  describe("get .path", () => {
    it("should return the path", () => {
      assert.equal(loc.path, "/path/to/package");
    });
  });
});
