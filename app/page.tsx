import { createWorkout } from "@/lib/workouts/actions"

export default function HomePage() {
  async function logTestWorkout() {
    "use server"

    await createWorkout({
      userId: "1",
      type: "RUCK",
      ruck: {
        distanceKm: 5,
        weightKg: 20,
        timeSec: 1500,
      },
      notes: "Baseline ruck",
    })
  }

  return (
    <form action={logTestWorkout}>
      <button className="border-white border-2 p-2 m-2 rounded font-bold hover:bg-white hover:text-black transition-colors hover:cursor-pointer" type="submit">Log Test Workout</button>
    </form>
  )
}
