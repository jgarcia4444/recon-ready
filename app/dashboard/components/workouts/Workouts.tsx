import { getWorkouts } from "@/lib/workouts/actions";

import { colorMap } from "@/lib/workouts/colorMap";

export default async function Workouts({workouts}: {workouts: any[]}) {

    const computedDuration = (timeInSeconds: number) => {
        let timeInMinutes = Math.floor(timeInSeconds / 60);
        let durationString = `${timeInMinutes} min${timeInMinutes > 1 ? 's' : ''}`;
        let secondsRemainder = timeInSeconds % 60;
        return `${durationString} ${secondsRemainder} sec${secondsRemainder > 1 ? 's' : ''}`;
    }
    
    return (
        <div className="flex flex-col gap-4 w-full justify-between">
            {workouts.map((workout) => (
                <div className={`flex flex-col gap-4 p-4 rounded shadow-lg ${colorMap[workout.type as keyof typeof colorMap]}`} key={workout.id}>
                    <p className={`text-lg font-bold`}>{workout.type}</p>
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