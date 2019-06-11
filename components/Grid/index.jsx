import React from "react";
import PropTypes from "prop-types";
import { defaults } from "./consts";

const Grid = ({
    columns = defaults.columns,
    columnSpan = defaults.columnSpan,
    height = defaults.height,
    minHeight = defaults.minHeight,
    maxHeight = defaults.maxHeight,
    gap = defaults.gap,
    spaceBottom = defaults.spaceBottom,
    spaceTop = defaults.spaceTop,
    ...props
}) => {
    return (
        <div className="grid">
            {props.children}
            <style jsx>{`
                .grid {
                    display: grid;
                    height: ${height};
                    grid-auto-flow: row;
                    grid-auto-rows: minmax(${minHeight}, ${maxHeight});
                    grid-template-columns: repeat(${columns}, ${columnSpan});
                    grid-gap: ${gap};
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    margin-top: ${spaceTop};
                    margin-bottom: ${spaceBottom};
                }
            `}</style>
        </div>
    );
};

Grid.propTypes = {
    columns: PropTypes.number,
    height: PropTypes.string,
    minHeight: PropTypes.string,
    maxHeight: PropTypes.string,
    gap: PropTypes.string,
    spaceTop: PropTypes.string,
    spaceBottom: PropTypes.string,
    columnSpan: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Grid;
