import {Pie, PieChart as PieChartComponent, Cell, Tooltip} from "recharts";
import {useMemo} from "react";
import data from '../data';

const data1 = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const PieChart = () => {

    const parsedData = useMemo(() => {
        const res = data.posts.reduce((acc, el) => {
            if (acc[el.category]) {
                acc[el.category] += 1;
            } else {
                acc[el.category] = 1;
            }
            return acc
        }, {})

        return Object.entries(res).map(([name, value]) => ({name, value}))
    }, [data])

    return (
        <>
            <h4 style={{textAlign: 'center'}}>Categories</h4>
            <PieChartComponent width={400} height={250}>
                <Pie
                    data={parsedData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {parsedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip/>
            </PieChartComponent>
        </>
    )
}
