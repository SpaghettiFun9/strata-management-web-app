
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Sample maintenance request data
const maintenanceRequests = [
  {
    id: 1,
    title: "Lobby Light Replacement",
    location: "Main Entrance",
    status: "pending",
    date: new Date("2025-04-01"),
  },
  {
    id: 2,
    title: "Elevator Inspection",
    location: "Building A",
    status: "in-progress",
    date: new Date("2025-03-28"),
  },
  {
    id: 3,
    title: "Garden Maintenance",
    location: "Common Area",
    status: "completed",
    date: new Date("2025-03-25"),
  },
  {
    id: 4,
    title: "Pest Control",
    location: "Basement",
    status: "scheduled",
    date: new Date("2025-04-10"),
  },
];

const statusColors = {
  "pending": "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  "completed": "bg-green-100 text-green-800",
  "scheduled": "bg-purple-100 text-purple-800",
};

const MaintenanceRequests = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Maintenance Requests</CardTitle>
        <CardDescription>Latest maintenance activity in your building</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {maintenanceRequests.map((request) => (
            <div 
              key={request.id} 
              className="flex items-center justify-between bg-background p-3 rounded-md"
            >
              <div>
                <h4 className="font-medium">{request.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-muted-foreground">{request.location}</p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-xs text-muted-foreground">
                    {format(request.date, "MMM d, yyyy")}
                  </p>
                </div>
              </div>
              <Badge className={cn(statusColors[request.status as keyof typeof statusColors])}>
                {request.status.replace("-", " ")}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MaintenanceRequests;
