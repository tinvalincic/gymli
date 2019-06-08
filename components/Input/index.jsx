import React from 'react';
import theme from "../Theme";
import PropTypes from 'prop-types';
import css from 'styled-jsx/css'


const Input = ({ type, id, name, className: klasa = "", placeholder, min, max, step, value, onChangeHandler }) => {
    //#region CSS values for different types
    let prepareCSS;
    switch (type){
        case "range":
            prepareCSS = css.resolve`
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
                    background: ${theme.uxRange.background};
                    border-radius: 0px;
                    border: 0px;
                }
                input[type=range]::-webkit-slider-thumb {
                    border: 0px;
                    height: 30px;
                    width: 30px;
                    border-radius: 0px;
                    background: ${theme.uxRange.thumb};
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -14px;
                }
                input[type=range]:focus::-webkit-slider-runnable-track {
                    background: ${theme.uxRange.background};
                }
                input[type=range]::-moz-range-track {
                    width: 100%;
                    height: 2px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: ${theme.uxRange.background};
                    border-radius: 0px;
                    border: 0px;
                }
                input[type=range]::-moz-range-thumb {
                    border: 0px;
                    height: 28px;
                    width: 5px;
                    border-radius: 0px;
                    background: ${theme.uxRange.background};
                    cursor: pointer;
                }
                input[type=range]::-ms-track {
                    width: 100%;
                    height: 2px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: ${theme.uxRange.background};
                    border-radius: 0px;
                    border: 0px;
                }
                input[type=range]::-ms-fill-lower {
                    background: ${theme.uxRange.background};
                    border: 0.2px solid ${theme.uxRange.border};
                    border-radius: 2.6px;
                }
                input[type=range]::-ms-fill-upper {
                    background: ${theme.uxRange.fill};
                    border: 0.2px solid ${theme.uxRange.border};
                    border-radius: 2.6px;
                }
                input[type=range]::-ms-thumb {
                    border: 1px solid ${theme.uxRange.borderDark};
                    height: 36px;
                    width: 16px;
                    border-radius: 3px;
                    cursor: pointer;
                }
                input[type=range]:focus::-ms-fill-lower {
                    background: ${theme.uxRange.fill};
                }
                input[type=range]:focus::-ms-fill-upper {
                    background: background: ${theme.uxRange.fill};
                }
                `;
            break;
        case "number":
        case "text":
            prepareCSS = css.resolve`
                input {
                    padding-top: 4px;
                    line-height: initial;
                    border: 0px;
                    padding: 0px;
                    padding-top: 0px;
                    width: 100%;
                    color: ${theme.numberColor.default};
                    font-size: 15px;
                    padding-top: 10px;
                    text-align: center;
                    font-weight: 600;
                }
            `;
            break;
        default:
            prepareCSS = css.resolve``;
        
    }
    const { className, styles } = prepareCSS;
    //#endregion
    return <>
        <input 
            type={type} 
            id={id} 
            name={name}
            placeholder={placeholder} 
            className={className+' '+klasa}
            min={min} 
            max={max} 
            step={step} 
            value={value} 
            onChange={onChangeHandler}
            onBlur={onChangeHandler}
        />{styles}
    </>;
}
//#region proptypes
Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    step: PropTypes.number,
    className: PropTypes.string,
    id: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    onChangeHandler: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}
//#endregion
export default Input;
