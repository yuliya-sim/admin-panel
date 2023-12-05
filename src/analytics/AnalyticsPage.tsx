import {Card, CardHeader, Grid} from "@mui/material";
import {
    Area,
    Bar,
    CartesianGrid, ComposedChart, Legend,
    Line,
    ResponsiveContainer, Scatter,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {Title} from "react-admin";

const data = [
    {
        name: 'Post 1',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Post 2',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Post 3',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Post 4',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Post 5',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Post 6',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
    {
        name: 'Post 7',
        uv: 1240,
        pv: 500,
        amt: 1450,
        cnt: 333,
    },
    {
        name: 'Post 8',
        uv: 900,
        pv: 700,
        amt: 1324,
        cnt: 390,
    },
    {
        name: 'Post 9',
        uv: 1832,
        pv: 1100,
        amt: 1400,
        cnt: 260,
    },
];

export const AnalyticsPage = () => {
    return <>
        <Title defaultTitle={'Analytics'}/>
        <Card style={{marginTop: 20}}>
            <CardHeader title={'Analytics'}/>
            <div style={{width: '100%'}}>
                <h3 style={{textAlign: 'center', marginBottom: 20}}>Overview</h3>
                <Grid container width={'100%'} justifyContent={'space-around'} style={{textAlign: 'center'}}>
                    <div>
                        <div>Total UV:</div>
                        <div>20347</div>
                    </div>
                    <div>
                        <div>Total PV:</div>
                        <div>15332</div>
                    </div>
                    <div>
                        <div>Total AMT:</div>
                        <div>12040</div>
                    </div>
                    <div>
                        <div>Total CNT:</div>
                        <div>5349</div>
                    </div>
                </Grid>
            </div>
            <div style={{height: 500}}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5"/>
                        <XAxis dataKey="name" scale="band"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8"/>
                        <Bar dataKey="pv" barSize={20} fill="#413ea0"/>
                        <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
                        <Scatter dataKey="cnt" fill="red"/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </Card>
    </>
}
