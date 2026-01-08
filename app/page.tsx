import { createWorkoutAction } from "./workouts/actions";

export default function HomePage() {

  return (
    <form action={createWorkoutAction} className="space-y-4 p-8">
      <select name="type" className="border p-2">
        <option value="RUN">Run</option>
        <option value="SWIM">Swim</option>
        <option value="STRENGTH">Strength</option>
        <option value="RUCK">Ruck</option>
      </select>

      <input
        name="notes"
        placeholder="Notes (optional)"
        className="border p-2"
      />

      <button className="bg-black text-white px-4 py-2">
        Log Workout
      </button>
    </form>
  );
}
