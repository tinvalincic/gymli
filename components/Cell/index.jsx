import React from "react";
import PropTypes from "prop-types";
import { defaults } from "./consts";

const Cell = ({
    width = defaults.width,
    height = defaults.height,
    ...props
}) => {
    return (
        <div className="cell">
            {props.children}
            <style jsx>{`
                .cell {
                    min-width: 0;
                    grid-column-end: span ${width};
                    grid-row-end: span ${height};
                    text-align: center;
                    display: -webkit-inline-box;
                    display: -webkit-inline-flex;
                    display: -ms-inline-flexbox;
                    display: inline-flex;
                    -webkit-flex-flow: column wrap;
                    -ms-flex-flow: column wrap;
                    flex-flow: column wrap;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-packjustify-self: stretch;
                    -webkit-justify-self: stretch;
                    -ms-flex-packjustify-self: stretch;
                    justify-self: stretch;
                }
            `}</style>
        </div>
    );
};

Cell.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Cell;
