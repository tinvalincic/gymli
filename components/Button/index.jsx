import React from "react";
import theme from "../Theme";
import PropTypes from "prop-types";

const Button = ({
    type = "primary",
    size = "normal",
    display = "inline-block",
    onClickHandle,
    ...props
}) => {
    return (
        <button type="button" onClick={onClickHandle} className="btn">
            {props.children}
            <style jsx>{`
                .btn {
                    background-color: ${theme.backgroundButton[type]};
                    color: ${theme.colorButton[type]};
                    font-size: ${theme.fontSizeButton[size]};
                    display: ${display};
                    padding: ${theme.paddingButton[size]};
                    border: 0px;
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
    size: PropTypes.string,
    display: PropTypes.string,
    onClickHandle: PropTypes.func,
    children: PropTypes.element.isRequired
};

export default Button;
