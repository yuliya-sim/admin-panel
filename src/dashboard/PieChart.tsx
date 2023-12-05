import { Pie, PieChart as PieChartComponent, Cell, Tooltip } from "recharts";

import {
    useGetList,
} from 'react-admin';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
}
export const PieChart = () => {

    let sortedData
    let combinedData
    const fetchedData = useGetList('posts');
    if (fetchedData) {
        sortedData = fetchedData.data?.map(item => ({ value: item.views, name: item.category }))
        if (sortedData) {
            combinedData = Object.values(
                sortedData.reduce((acc, curr) => {
                    const { name, value } = curr;

                    if (!acc[name]) {
                        acc[name] = { name, value };
                    } else {
                        acc[name].value += value;
                    }
                    return acc;
                }, {})
            );
        }

    }

    if (!combinedData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h4 style={{ textAlign: 'center' }}>Categories</h4>
            <PieChartComponent width={400} height={250}>
                <Pie
                    data={combinedData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {combinedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChartComponent>
        </>
    )
}

