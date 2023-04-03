import { DoughnutChart } from "../components/DoughnutChart";
import { ScatterChart } from "../components/ScatterChart";
import { StackedbarChart } from "../components/StackedbarChart";
import { GradientChart } from "../components/GradientChart";
import { GradientChart2 } from "../components/GradientChart2";

function Dashboard() {
    return (
        <>
            <div className="flex flex-col sm:flex-row md:flex-row">
                <div className="flex flex-col">
                    <div className="bg-slate-800 rounded-lg p-2 m-2 
                    w-full h-[300px] 
                    sm:w-[px] sm:h-[px] 
                    md:w-[px] md:h-[px] 
                    lg:w-[px] lg:h-[px]">
                        {/* <DoughnutChart /> */}
                    </div>
                    <div className=" bg-slate-800 rounded-lg p-2 m-2 
                    w-full h-[200px] 
                    sm:w-[px] sm:h-[px] 
                    md:w-[px] md:h-[px] 
                    lg:w-[px] lg:h-[px]">
                        {/* <GradientChart /> */}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className=" bg-slate-800 rounded-lg p-2 m-2 
                    w-full h-[200px] 
                    sm:w-[px] sm:h-[px] 
                    md:w-[px] md:h-[px] 
                    lg:w-[px] lg:h-[px]">
                        {/* <GradientChart2 /> */}
                    </div>
                    <div className="bg-slate-800 rounded-lg p-2 m-2 
                    w-full h-[200px] 
                    sm:w-[px] sm:h-[px] 
                    md:w-[px] md:h-[px] 
                    lg:w-[px] lg:h-[px]">
                        {/* <ScatterChart /> */}
                    </div>
                    <div className=" bg-slate-800 rounded-lg p-2 m-2 
                    w-full h-[300px] 
                    sm:w-[px] sm:h-[px] 
                    md:w-[px] md:h-[px] 
                    lg:w-[px] lg:h-[px]">
                        {/* <StackedbarChart /> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Dashboard;