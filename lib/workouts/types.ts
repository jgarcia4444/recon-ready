import { WorkoutType, SwimStroke } from "@prisma/client"

export type CreateWorkoutInput =
  | {
      userId: string
      type: "RUN"
      notes?: string
      run: {
        distanceKm: number
        timeSec: number
      }
    }
  | {
      userId: string
      type: "SWIM"
      notes?: string
      swim: {
        distanceM: number
        timeSec: number
        stroke?: SwimStroke
      }
    }
  | {
      userId: string
      type: "STRENGTH"
      notes?: string
      strength: {
        pullUps?: number
        pushUps?: number
        sitUps?: number
      }
    }
  | {
      userId: string
      type: "RUCK"
      notes?: string
      ruck: {
        distanceKm: number
        weightKg: number
        timeSec: number
      }
    }
