
import SectionTitle from "@/app/components/headings/SectionTitle"

export default function UserWorkouts({workouts}: {workouts: any[]}) {

    function renderWorkoutCards() {
    return workouts.map((workout) => {
        return (
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-2" key={workout.id}>
                <h3>{workout.name}</h3>
                <p>{workout.type}</p>
                <p>{workout.description}</p>
            </div>
        )
    })
}
    return (
        <div>
            <div className="flex flex-col w-full">
                <SectionTitle text="Workouts" />
                <div className="flex flex-wrap gap-2 flex-row">
                    {renderWorkoutCards()}
                </div>
            </div>
        </div>
    )
}
