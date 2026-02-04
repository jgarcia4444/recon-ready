import { getWorkouts } from "@/lib/workouts/actions";
export default async function Workouts() {

    const workouts = await getWorkouts("1");
    if (workouts.length ===  0) {
        return <p>No workouts found</p>;
    }

    const computedDuration = (timeInSeconds: number) => {
        let timeInMinutes = Math.floor(timeInSeconds / 60);
        let durationString = `${timeInMinutes} min${timeInMinutes > 1 ? 's' : ''}`;
        let secondsRemainder = timeInSeconds % 60;
        return `${durationString} ${secondsRemainder} sec${secondsRemainder > 1 ? 's' : ''}`;
    }
    return (
        <div className="flex flex-row gap-4 w-full justify-between">
            {workouts.map((workout) => (
                <div className="flex flex-col gap-2 p-2 rounded-lg border border-gray-200" key={workout.id}>
                    <h3>workout id: {workout.id}</h3>
                    <p>workout type: {workout.type}</p>
                    <div className="flex flex-row w-full gap-2 justify-between">
                        <div className="flex flex-row"><span className="font-bold">Duration:&nbsp;</span>{computedDuration(workout.run?.timeSec || 0)}</div>
                        <div className="flex flex-row"><span className="font-bold">Distance:</span></div>
                        <div className="flex flex-row"><span className="font-bold">Mins/KM</span></div>
                    </div>
                </div>
            ))}
        </div>
    );
}