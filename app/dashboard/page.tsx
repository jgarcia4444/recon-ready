import PageTitle from "@/app/components/headings/PageTitle";
import UserWorkouts from "./components/user/UserWorkouts";
export default function DashboardPage() {


  return (
    <div>
      <PageTitle title="Dashboard" />
      <div className="flex flex-col w-full bg-gray-300/10 rounded p-2 mt-2">
        {/* <UserInfoCard /> */}
        <UserWorkouts />
      </div>
    </div>
  )
}