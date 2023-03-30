import { DoughnutChart } from "../components/DoughnutChart";
import { ScatterChart } from "../components/ScatterChart";
import { StackedbarChart } from "../components/StackedbarChart";
import { GradientChart } from "../components/GradientChart";

function Dashboard() {
    return (
        <>
        <h1 className="text-white">Dashboard</h1>
        <DoughnutChart />
        <ScatterChart />
        <StackedbarChart />
        <GradientChart />
        </>
    )
};

export default Dashboard;