import React, { useState } from "react";
import Button from "./Button";
import Chart from "./Chart";
import Grid from "./Grid";
import Cell from "./Cell";

const TinComponents = () => {
    const [data, setData] = useState([4, 8, 10]);
    const [labels, setLabels] = useState(data.map(d => d + "."));

    const updateData = () => {
        setData(data.map(d => d + 1));
        setLabels(data.map(d => d + "."));
    };

    return (
        <>
            <Grid columns={3} gap="15px">
                <Cell height={2}>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell width={2}>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
                <Cell width={3}>
                    <div style={{ background: "#e35751" }}>Cell</div>
                </Cell>
            </Grid>
            <Grid columns={3}>
                <Button
                    type="primary"
                    size="small"
                    display="block"
                    onClickHandle={updateData}
                >
                    Small
                </Button>
                <Button
                    type="primary"
                    size="normal"
                    display="block"
                    onClickHandle={() => console.log("delam")}
                >
                    normal
                </Button>
                <Button
                    type="primary"
                    size="large"
                    display="block"
                    active={true}
                    onClickHandle={() => console.log("delam")}
                >
                    large
                </Button>
                <Button
                    type="primary"
                    size="small"
                    display="inline-block"
                    onClickHandle={() => console.log("delam")}
                >
                    Small inline
                </Button>
                <Button
                    type="primary"
                    size="normal"
                    display="inline-block"
                    onClickHandle={() => console.log("delam")}
                >
                    normal inline
                </Button>
                <Button
                    type="primary"
                    size="large"
                    display="inline-block"
                    onClickHandle={() => console.log("delam")}
                >
                    large inline
                </Button>
            </Grid>
            <hr />
            <Chart type="line" data={data} labels={labels} />
            <Chart
                type="bar"
                data={[4, 15, 10, 20, 8, 13, 20]}
                labels={["prvo", "drugo", "treće", "četvrto", "peto"]}
            />
            <Chart type="doughnut" data={data} labels={labels} />
        </>
    );
};

export default TinComponents;
