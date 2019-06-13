import React, { useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Range from "./Range";

const JuricaComponents = props => {
    let { vrijednost, dispatchVrijednost } = props;
    console.log("propsi", props);
    console.log("Dispeč: ", dispatchVrijednost);
    const mm = {
        reps: {
            def: 5,
            min: 0,
            max: 50,
            step: 1
        },
        rpe: {
            def: 6,
            min: 5,
            max: 10,
            step: 0.5
        }
    };

    const [tezina, setTezina] = useState(0);
    const [reps, setReps] = useState(mm.reps.def);
    const [rpe, setRpe] = useState(mm.rpe.def);

    const tezinaHandler = e => {
        const v = e.target.value;
        if (v > 0) setTezina(v);
        dispatchVrijednost(v);
    };
    const repsHandler = e => {
        const v = e.target.value;
        if (v >= mm.reps.min && v <= mm.reps.max) setReps(v);
        dispatchVrijednost(v);
    };
    const rpeHandler = e => {
        const v = e.target.value;
        if (v >= mm.rpe.min && v <= mm.rpe.max) setRpe(v);
        dispatchVrijednost(v);
    };

    return (
        <>
            <h1>Ranger za benchpress primjer: {vrijednost}</h1>
            <Range
                name="Težina"
                type="plates"
                value={tezina}
                onChangeHandler={tezinaHandler}
            />
            <Range
                name="Reps"
                type="slider"
                min={mm.reps.min}
                max={mm.reps.max}
                step={mm.reps.step}
                value={reps}
                onChangeHandler={repsHandler}
            />
            <Range
                name="RPE"
                type="slider"
                min={mm.rpe.min}
                max={mm.rpe.max}
                step={mm.rpe.step}
                value={rpe}
                onChangeHandler={rpeHandler}
            />
            <Link href="stejt">
                <a>
                    Čekiraj jel se stejt: {vrijednost} preselio u drugi pejdž?
                </a>
            </Link>
        </>
    );
};

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
)(JuricaComponents);
