"use server"
import { createWorkout } from "@/lib/workouts/createWorkout";
import { WorkoutType } from "@prisma/client";

export async function createWorkoutAction(formData: FormData) {

    const type = formData.get("type") as WorkoutType;
    const notes = formData.get("notes")?.toString();
    try {
    await createWorkout({
        userId: "1",
        type,
        notes
    });
} catch (error) {
    console.error(error);
    throw error;
}
}