"use server"

import { prisma } from "@/lib/prisma"
import { CreateWorkoutInput } from "./types"

export async function createWorkout(input: CreateWorkoutInput) {
  return prisma.$transaction(async (tx) => {
    try {
        const workout = await tx.workout.create({
          data: {
            userId: input.userId,
            type: input.type,
            notes: input.notes,
          },
        })
        switch (input.type) {
        case "RUN":
            await tx.runMetric.create({
            data: {
                workoutId: workout.id,
                distanceKm: input.run.distanceKm,
                timeSec: input.run.timeSec,
            },
            })
            break

        case "SWIM":
            await tx.swimMetric.create({
            data: {
                workoutId: workout.id,
                distanceM: input.swim.distanceM,
                timeSec: input.swim.timeSec,
                stroke: input.swim.stroke,
            },
            })
            break

        case "STRENGTH":
            await tx.strengthMetric.create({
            data: {
                workoutId: workout.id,
                pullUps: input.strength.pullUps,
                pushUps: input.strength.pushUps,
                sitUps: input.strength.sitUps,
            },
            })
            break

        case "RUCK":
            await tx.ruckMetric.create({
            data: {
                workoutId: workout.id,
                distanceKm: input.ruck.distanceKm,
                weightKg: input.ruck.weightKg,
                timeSec: input.ruck.timeSec,
            },
            })
            break
        }
        return workout
    } catch (error) {
        console.error("Error creating workout:", error)
        throw error
    }
  }) 
}
