import { DoughnutChart } from "../components/DoughnutChart";
import { ScatterChart } from "../components/ScatterChart";
import { StackedbarChart } from "../components/StackedbarChart";
import { GradientChart } from "../components/GradientChart";
import { GradientChart2 } from "../components/GradientChart2";

function Dashboard() {
    return (
        <>
            <div className="flex border border-black justify-center place-items-center rounded-xl p-4 m-6 bg-gradient-to-r from-purple-800 to-blue-700 transition">
                <div className="flex flex-col sm:flex-row sm:gap-8 sm:justify-center sm:place-items-center">
                    <div className="flex flex-col">
                        <div className="flex justify-center place-items-center bg-slate-800 rounded-lg my-2 
                    w-full h-[300px] 
                    sm:w-[300px] sm:h-[400px] 
                    md:w-[400px] md:h-[570px] 
                    lg:w-[500px] lg:h-[600px]">
                            <DoughnutChart />
                        </div>
                        <div className="flex justify-center place-items-center bg-slate-800 rounded-lg my-2 
                    w-full h-[200px] 
                    sm:w-[300px] sm:h-[215px] 
                    md:w-[400px] md:h-[350px] 
                    lg:w-[500px] lg:h-[390px]">
                            <GradientChart />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center place-items-center bg-slate-800 rounded-lg my-2 
                    w-full h-[200px] 
                    sm:w-[300px] sm:h-[200px] 
                    md:w-[400px] md:h-[300px] 
                    lg:w-[500px] lg:h-[325px]">
                            <GradientChart2 />
                        </div>
                        <div className="flex justify-center place-items-center bg-slate-800 rounded-lg my-2 
                    w-full h-[200px] 
                    sm:w-[300px] sm:h-[200px] 
                    md:w-[400px] md:h-[300px] 
                    lg:w-[500px] lg:h-[325px]">
                            <ScatterChart />
                        </div>
                        <div className="flex justify-center place-items-center bg-slate-800 rounded-lg my-2 
                    w-full h-[200px] 
                    sm:w-[300px] sm:h-[200px] 
                    md:w-[400px] md:h-[300px] 
                    lg:w-[500px] lg:h-[325px]">
                            <StackedbarChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Dashboard;