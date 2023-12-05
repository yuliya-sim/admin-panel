import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
    useGetList,

} from 'react-admin';


export default () => {
    let chartData
    const data = useGetList('posts');
    if (data) {
        chartData = data.data?.sort((a, b) => a.id - b.id)
    }
    return (
        <>
            <h4 style={{ textAlign: 'center' }}>Posts views</h4>
            <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#82ca9d" />
            </LineChart>
        </>
    );
}

