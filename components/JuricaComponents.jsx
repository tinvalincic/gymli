import React, {useState} from "react";
import Input from "./Input";


const JuricaComponents = () => {

    const [vrijednost, setVrijednost] = useState(100);

    const onChangeHandler = (e) => {
        setVrijednost(e.target.value);
    };

    return (
        <>
            <p>{vrijednost}</p>
            <Input type="range" min={0} max={200} step={25} value={vrijednost} className="nekaKlasa" onChangeHandler={onChangeHandler} />
            <Input type="number" min={0} max={5} step={0.5}  />
        </>
    );
};

export default JuricaComponents;
