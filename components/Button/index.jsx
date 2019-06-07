import React from "react";

const Button = ({
    type = button,
    text = "Submit",
    onClickHandle,
    ...props
}) => {
    return (
        <button type={type} onClick={onClickHandle} className="btn-primary">
            {props.children}
            <style jsx>{`
                .btn-primary {
                    display: block;
                    background-color: #e35751;
                }
            `}</style>
        </button>
    );
};

export default Button;
