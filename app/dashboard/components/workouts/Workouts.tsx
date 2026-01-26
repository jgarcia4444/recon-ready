import { getWorkouts } from "@/lib/workouts/actions";
export default async function Workouts() {

    const workouts = await getWorkouts("1");
    if (workouts.length ===  0) {
        return <p>No workouts found</p>;
    }
    return (
        <div>
            {workouts.map((workout) => (
                <div key={workout.id}>
                    <h3>workout id: {workout.id}</h3>
                    <p>workout type: {workout.type}</p>
                    {/* <p>workout description: {workout.description}</p> */}
                </div>
            ))}
        </div>
    );
}