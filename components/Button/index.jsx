import React from "react";
import theme from "../Theme";
import PropTypes from "prop-types";

const Button = ({
    type = "primary",
    size = "normal",
    display = "inline-block",
    active = false,
    classProp = "",
    onClickHandle,
    ...props
}) => {    
    return (
        <button type="button" onClick={onClickHandle} className={`btn ${classProp} ${active ? "active" : ""}`}>
            {props.children}
            <style jsx>{`
                .btn {
                    background-color: ${theme.backgroundButton[type]};
                    color: ${theme.colorButton[type]};
                    font-size: ${theme.fontSizeButton[size]};
                    display: ${display};
                    width: ${display === "block" ? "100%" : "auto"};
                    padding: ${theme.paddingButton[size]};
                    border: 0px;
                    margin: ${theme.marginButton[display !== "block" ? "normal" : display][size]};
                    vertical-align: middle;
                    text-align: center;
                }
                .btn:hover {
                    background-color: ${theme.backgroundButtonHover[type]};
                    transition: ${theme.transitionButton[type]};
                }
                .btn.active{
                    background-color: ${theme.backgroundButtonActive[type]};
                    border-left: ${display === "block" ? "3px solid" : "0px"};
                    border-left-color: ${theme.borderColorButtonActive[type]};
                    color: ${theme.colorButtonActive[type]};
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
    classProp: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default Button;
