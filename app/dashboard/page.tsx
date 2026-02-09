import PageTitle from "@/app/components/headings/PageTitle";
import UserWorkouts from "./components/user/UserWorkouts";
export default function DashboardPage() {


  return (
    <div className="">
      <PageTitle title="Dashboard" />
      <div className="flex flex-col w-full mt-4">
        {/* <UserInfoCard /> */}
        <UserWorkouts />
      </div>
    </div>
  )
}