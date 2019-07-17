import { expect } from "chai";
import { cw } from "../util/conversions";

describe("Converting kg to lbs and the other way around", function() {
    it("shouldn't do anything for kilograms (default)", function() {
        expect(cw("kg", 100)).to.be.eql(100); // returns the same value
        expect(cw("kg", "100")).to.be.eql(100); // converts string to number
    });
    it("should convert kg to lbs if lbs sent", function() {
        // set of values as I have on my weights that I use :-)
        expect(cw("lbs", 0.5)).to.be.eql(1.1);
        //expect(cw("lbs", 1.25)).to.be.eql(2.75); -> izbačeno dok se ne dogovorimo za zaokruživanje
        expect(cw("lbs", 2.5)).to.be.eql(5.5);
        expect(cw("lbs", 5)).to.be.eql(11);
        expect(cw("lbs", 10)).to.be.eql(22);
        expect(cw("lbs", 20)).to.be.eql(44);
    });
    it("should throw errors for wrong types of arguments or no arguments given", function() {
        // trhows an error when number converts to NaN
        let tmpF = function() {
            return cw("kg", "one hundread");
        };
        expect(tmpF).to.throw(
            "util/conversions.js > convertWeight cannot take value that cannot be converted to Number"
        );
        // trhows an error when first param isn't kg or lbs
        tmpF = function() {
            return cw(10, 10);
        };
        expect(tmpF).to.throw(
            "util/conversions.js > convertWeight can only take string vals kg or lbs as arguments"
        );
        tmpF = function() {
            return cw("bl", 10);
        };
        expect(tmpF).to.throw(
            "util/conversions.js > convertWeight can only take string vals kg or lbs as arguments"
        );
        // throws an error when not using exactly 2 params
        tmpF = function() {
            return cw(10);
        };
        expect(tmpF).to.throw(
            "util/conversions.js > convertWeight accepts EXACTLY two params"
        );
        tmpF = function() {
            return cw();
        };
        expect(tmpF).to.throw(
            "util/conversions.js > convertWeight accepts EXACTLY two params"
        );
        tmpF = function() {
            return cw("kg", 10, true);
        };
        expect(tmpF).to.throw(
            "util/conversions.js > convertWeight accepts EXACTLY two params"
        );
    });
});
