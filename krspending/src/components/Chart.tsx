import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface ChartProps {
  data: { name: string; value: number }[];
}

export default function Chart({ data }: ChartProps) {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
