import React from "react";
import theme from "../Theme";
import PropTypes from "prop-types";

const Button = ({ type = "primary", onClickHandle, ...props }) => {
    return (
        <button type="button" onClick={onClickHandle} className="btn">
            {props.children}
            <style jsx>{`
                .btn {
                    background-color: ${theme.backgroundButton[type]};
                    color: ${theme.colorButton[type]};
                }
                .btn:hover {
                    background-color: ${theme.backgroundButtonHover[type]};
                    transition: ${theme.transitionButton[type]};
                }
            `}</style>
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClickHandle: PropTypes.func,
    children: PropTypes.children
};

export default Button;
