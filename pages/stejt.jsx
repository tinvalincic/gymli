import React from 'react';
import { connect } from 'react-redux';

function Stejt({ vrijednost }) {
    return (
        <div>
            {vrijednost}
        </div>
    )
}
//#region REDUX
const mapStateToProps = state => {
    return {
        vrijednost: state.vrijednost
    };
};
const mapDispatchToProps = dispatch => {
    return {
        dispatchVrijednost: vrijednost =>
            dispatch({ type: "PROBNA_AKCIJA_ZAPISI", vrijednost: vrijednost })
    };
};
//#endregion

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stejt);
