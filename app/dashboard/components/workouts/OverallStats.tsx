
export default function OverallStats({workouts}: {workouts: any[]}) {

    const stateBrokenDown = workouts.reduce((acc, workout) => {
        acc[workout.type] = (acc[workout.type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    console.log(stateBrokenDown);
    const renderstatsBrokenDown = Object.entries(stateBrokenDown).map(([key, value]) => {
        return (
            <div key={key} className="flex flex-row">
                <div className="flex flex-col">
                    <div className="font-bold">{key}</div>
                    <div className="text-sm text-gray-500">{value as number}</div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="flex flex-col w-full gap-2 mt-2">
                {renderstatsBrokenDown}
            </div>
        </div>
    )
}