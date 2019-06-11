import React, { useState } from "react";
import Range from "./Range";

const JuricaComponents = () => {

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
    };
    const repsHandler = e => {
        const v = e.target.value;
        if (v >= mm.reps.min && v <= mm.reps.max) setReps(v);
    };
    const rpeHandler = e => {
        const v = e.target.value;
        if (v >= mm.rpe.min && v <= mm.rpe.max) setRpe(v);
    };

    return (
        <>
            <h1>Ranger za benchpress primjer:</h1>
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
        </>
    );
};

export default JuricaComponents;
