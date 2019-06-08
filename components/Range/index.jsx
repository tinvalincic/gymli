import React from 'react';
import PropTypes from 'prop-types';

const Range = ({ id, name, className, min, max, step, value, onChangeHandler }) => {
    return (
        <>
            <input 
                type="range" 
                id={id} 
                name={name}
                className={className}
                min={min} 
                max={max} 
                step={step} 
                value={value} 
                onChange={onChangeHandler}
                onBlur={onChangeHandler}
            />
            <style jsx>{`
                input[type=range] {
                    -webkit-appearance: none;
                    margin: 14px 0 12px;
                    width: 100%;
                }
                input[type=range]:focus {
                    outline: none;
                }
                input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 2px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: #dddddd;
                    border-radius: 0px;
                    border: 0px;
                }
                input[type=range]::-webkit-slider-thumb {
                    border: 0px;
                    height: 30px;
                    width: 30px;
                    border-radius: 0px;
                    background: #e35751;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -14px;
                }
                input[type=range]:focus::-webkit-slider-runnable-track {
                    background: #dddddd;
                }
                input[type=range]::-moz-range-track {
                    width: 100%;
                    height: 2px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: #dddddd;
                    border-radius: 0px;
                    border: 0px;
                }
                input[type=range]::-moz-range-thumb {
                    border: 0px;
                    height: 28px;
                    width: 5px;
                    border-radius: 0px;
                    background: #dddddd;
                    cursor: pointer;
                }
                input[type=range]::-ms-track {
                    width: 100%;
                    height: 2px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: #dddddd;
                    border-radius: 0px;
                    border: 0px;
                }
                input[type=range]::-ms-fill-lower {
                    background: #dddddd;
                    border: 0.2px solid #010101;
                    border-radius: 2.6px;
                }
                input[type=range]::-ms-fill-upper {
                    background: #a50505;
                    border: 0.2px solid #010101;
                    border-radius: 2.6px;
                }
                input[type=range]::-ms-thumb {
                    border: 1px solid #000000;
                    height: 36px;
                    width: 16px;
                    border-radius: 3px;
                    background: #ffffff;
                    cursor: pointer;
                }
                input[type=range]:focus::-ms-fill-lower {
                    background: #a50505;
                }
                input[type=range]:focus::-ms-fill-upper {
                    background: #367ebd;
                }
            `}</style>
        </>
    );
};

Range.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    onChangeHandler: PropTypes.func
};

export default Range;

