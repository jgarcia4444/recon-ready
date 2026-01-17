import PageTitle from "@/app/components/headings/PageTitle";
import UserWorkouts from "./components/user/UserWorkouts";

export default function DashboardPage() {
  return (
    <div>
      <PageTitle title="Dashboard" />
      {/* <UserInfoCard /> */}
      <UserWorkouts />
    </div>
  )
}