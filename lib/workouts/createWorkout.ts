
import {prisma} from "@/lib/prisma";
import { WorkoutType } from "@prisma/client";

export async function createWorkout(data: {
    userId: string
    type: WorkoutType
    notes?: string
}) {
    try {
        return prisma.workout.create({
            data
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}