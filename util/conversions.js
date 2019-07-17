function convertWeight(unit, value) {
    const toLbs = value => {
        const factor = 2.20462262185;
        let factored = value * factor;
        if (factored >= 10) {
            factored = Math.round(factored);
        } else {
            factored = Number(factored.toFixed(1));
        }
        return factored;
    };

    if (arguments.length !== 2)
        throw new Error(
            "util/conversions.js > convertWeight accepts EXACTLY two params"
        );

    value = Number(value);
    if (isNaN(value))
        throw new Error(
            "util/conversions.js > convertWeight cannot take value that cannot be converted to Number"
        );

    if (unit !== "kg" && unit !== "lbs")
        throw new Error(
            "util/conversions.js > convertWeight can only take string vals kg or lbs as arguments"
        );

    return unit === "kg" ? value : toLbs(value);
}

export { convertWeight as cw };
