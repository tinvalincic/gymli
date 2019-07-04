/**
|--------------------------------------------------
| type can be either
| slider or plates
|--------------------------------------------------
*/

import React from "react";
import Input from '../Input';
import Plates from '../Plates'
import PropTypes from "prop-types";

const Range = ({ name, type, step, min, max, value, onChangeHandler }) => {
    return (
        <>
            <p className="opis-serija">{name}</p>
            <Input type="number" min={min} max={max} value={value} onChangeHandler={onChangeHandler} />
            { type === "slider" ? <Input type="range" min={min} max={max} value={value} step={step} onChangeHandler={onChangeHandler} /> : null }
            { type === "plates" ? <Plates onClick={onChangeHandler} /> : null }
        </>
    );
};

//#region proptypes
Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChangeHandler: PropTypes.func,
    value: PropTypes.number
}
//#endregion

export default Range;
