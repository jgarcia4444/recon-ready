
import SectionTitle from "@/app/components/headings/SectionTitle";
import Workouts from "../workouts/Workouts";
import OverallStats from "../workouts/OverallStats";


export default function UserWorkouts() {
    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="w-full">
                    <SectionTitle text="Workouts" />
                </div>
                <div className="flex-row flex">
                    <div className="w-2/3 p-2 mr-1 rounded bg-white/5">
                        <Workouts />
                    </div>
                    <div className="w-1/3 ml-1 p-2 rounded bg-white/5">
                        <OverallStats />
                    </div>
                </div>
            </div>
        </div>
    )
}
