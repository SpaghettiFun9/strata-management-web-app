
import { Banknote, Users, FileText, Wrench, Calendar } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/dashboard/StatCard";
import MaintenanceRequests from "@/components/dashboard/MaintenanceRequests";
import UpcomingMeetings from "@/components/dashboard/UpcomingMeetings";
import FundBalances from "@/components/dashboard/FundBalances";
import NoticeBoard from "@/components/dashboard/NoticeBoard";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Building Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of Oceania Views Apartments strata management
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Units"
            value="24"
            description="In 3 buildings"
            icon={Users}
          />
          <StatCard
            title="Total Levies"
            value="$285,450"
            description="Annual collection target"
            icon={Banknote}
            trend="up"
            trendValue="5.2% from last year"
          />
          <StatCard
            title="Documents"
            value="58"
            description="Required strata records"
            icon={FileText}
          />
          <StatCard
            title="Pending Requests"
            value="7"
            description="Maintenance issues"
            icon={Wrench}
          />
        </div>

        {/* First Row */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <NoticeBoard />
          <FundBalances />
        </div>

        {/* Second Row */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <MaintenanceRequests />
          <UpcomingMeetings />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
