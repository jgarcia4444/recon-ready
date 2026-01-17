'use client'
import { useEffect } from "react"

import SectionTitle from "@/app/components/headings/SectionTitle"

export default function UserWorkouts() {
  useEffect(() => {
    console.log("UserWorkouts")
  }, [])
  return (
    <div>
      <SectionTitle text="Workouts" />
    </div>
  )
}