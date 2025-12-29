-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('RUN', 'SWIM', 'STRENGTH', 'RUCK');

-- CreateEnum
CREATE TYPE "SwimStroke" AS ENUM ('FREESTYLE', 'COMBAT_SIDE', 'BREAST');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "WorkoutType" NOT NULL,
    "notes" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RunMetric" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "distanceKm" DOUBLE PRECISION NOT NULL,
    "timeSec" INTEGER NOT NULL,

    CONSTRAINT "RunMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SwimMetric" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "distanceM" INTEGER NOT NULL,
    "timeSec" INTEGER NOT NULL,
    "stroke" "SwimStroke",

    CONSTRAINT "SwimMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StrengthMetric" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "pullUps" INTEGER,
    "pushUps" INTEGER,
    "sitUps" INTEGER,

    CONSTRAINT "StrengthMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuckMetric" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "distanceKm" DOUBLE PRECISION NOT NULL,
    "weightKg" DOUBLE PRECISION NOT NULL,
    "timeSec" INTEGER NOT NULL,

    CONSTRAINT "RuckMetric_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RunMetric_workoutId_key" ON "RunMetric"("workoutId");

-- CreateIndex
CREATE UNIQUE INDEX "SwimMetric_workoutId_key" ON "SwimMetric"("workoutId");

-- CreateIndex
CREATE UNIQUE INDEX "StrengthMetric_workoutId_key" ON "StrengthMetric"("workoutId");

-- CreateIndex
CREATE UNIQUE INDEX "RuckMetric_workoutId_key" ON "RuckMetric"("workoutId");

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RunMetric" ADD CONSTRAINT "RunMetric_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwimMetric" ADD CONSTRAINT "SwimMetric_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StrengthMetric" ADD CONSTRAINT "StrengthMetric_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuckMetric" ADD CONSTRAINT "RuckMetric_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
