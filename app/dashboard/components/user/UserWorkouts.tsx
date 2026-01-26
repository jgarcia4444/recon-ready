
import SectionTitle from "@/app/components/headings/SectionTitle"
import Workouts from "../workouts/Workouts"


export default function UserWorkouts() {
    return (
        <div>
            <div className="flex flex-col w-full">
                <SectionTitle text="Workouts" />
                <Workouts />
            </div>
        </div>
    )
}
