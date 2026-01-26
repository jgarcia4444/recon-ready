import PageTitle from "@/app/components/headings/PageTitle";
import UserWorkouts from "./components/user/UserWorkouts";
import { getWorkouts } from "@/lib/workouts/actions";
export default function DashboardPage() {

  const workouts: any[] = [];
  const loadWorkouts = async () => {
    const workoutsData = await getWorkouts("1");
    console.log(workoutsData);
    workouts.push(...workoutsData);
  }
loadWorkouts();
  return (
    <div>
      <PageTitle title="Dashboard" />
      <div className="flex flex-col w-full bg-gray-300/10 rounded p-2 mt-2">
        {/* <UserInfoCard /> */}
        <UserWorkouts workouts={workouts} />
      </div>
    </div>
  )
}