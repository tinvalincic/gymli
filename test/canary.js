//const expect = require("chai").expect;
import { expect } from "chai"; // I can use this ONLY when parsed through Babel!

describe("Canary test for Mocha/Chai", function() {
    it("should pass canary test", function() {
        expect(true).to.be.eql(true);
    });
});
