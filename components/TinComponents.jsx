import React from "react";
import Button from "./Button";

const TinComponents = () => (
    <>
        <Button type="primary" size="small" display="block" onClickHandle={() => console.log("delam")}>
            Small
        </Button>
        <Button type="primary" size="normal" display="block" onClickHandle={() => console.log("delam")}>
            normal
        </Button>
        <Button type="primary" size="large" display="block" active={true} onClickHandle={() => console.log("delam")}>
            large
        </Button>
        <Button type="primary" size="small" display="inline-block" onClickHandle={() => console.log("delam")}>
            Small inline
        </Button>
        <Button type="primary" size="normal" display="inline-block" onClickHandle={() => console.log("delam")}>
            normal inline
        </Button>
        <Button type="primary" size="large" display="inline-block" onClickHandle={() => console.log("delam")}>
            large inline
        </Button>
    </>
);

export default TinComponents;
