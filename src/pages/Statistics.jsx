import Heading from "../components/Heading";
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
    import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const data = useLoaderData();

    return (
        <>
        {/* Headding */}
        <Heading
        title="Performance"
        description="This version emphasizes both the detailed insights you provide and your team's dedication to staying ahead in the market. Let me know if you'd like any further tweaks!"
      />
        <div className="mx-auto mb-20 mt-10 w-11/12 max-w-screen-xl">
        <h2 className="mb-4 text-xl font-bold">Statistics</h2>
        <div className="h-96 rounded-xl bg-white p-2 md:p-4 lg:p-6">
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="title" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#9538E226"
                stroke="none"
              />
              <Bar dataKey="price" barSize={20} fill="#9538E2" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      </>
    );
};

export default Statistics;