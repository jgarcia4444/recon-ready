"use server";

import { prisma } from "@/lib/prisma";

const TEST_USER_ID = "1";

export async function createWorkout (
    type: "RUN" | "SWIM" | "STRENGTH" | "RUCK",
    notes?: string
) {
    try {
        return prisma.workout.create({
            data: {
                userId: TEST_USER_ID,
                type,
                notes,
            },
        });
    } catch (error) {
        console.error(error);
    }
}
