import React from "react";
import PropTypes from "prop-types";
import { rpeConsts } from "./consts";

const RpeRange = ({
    min = rpeConsts.min,
    max = rpeConsts.max,
    step = rpeConsts.step,
    def = rpeConsts.def
}) => {
    return false;
};

RpeRange.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    def: PropTypes.number
};
