
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, Wrench, Clock, CheckCircle, AlertTriangle, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

// Sample maintenance requests data
const maintenanceRequests = [
  {
    id: 1,
    title: "Lobby Light Replacement",
    location: "Main Entrance",
    description: "Three recessed ceiling lights in the main lobby are not working and need replacement.",
    requestedBy: "Unit 5",
    priority: "medium",
    status: "pending",
    date: new Date("2025-04-01"),
    assignedTo: null,
  },
  {
    id: 2,
    title: "Elevator Inspection",
    location: "Building A",
    description: "Annual elevator inspection and certification is due this month.",
    requestedBy: "Committee",
    priority: "high",
    status: "in-progress",
    date: new Date("2025-03-28"),
    assignedTo: "Sydney Elevator Services",
  },
  {
    id: 3,
    title: "Garden Maintenance",
    location: "Common Area",
    description: "Quarterly garden maintenance including pruning, fertilizing, and replanting seasonal flowers.",
    requestedBy: "Committee",
    priority: "low",
    status: "completed",
    date: new Date("2025-03-25"),
    assignedTo: "Green Thumb Landscaping",
    completionDate: new Date("2025-03-30"),
  },
  {
    id: 4,
    title: "Pest Control",
    location: "Basement",
    description: "Schedule routine pest control treatment for common areas, especially in garbage room and basement.",
    requestedBy: "Unit 12",
    priority: "medium",
    status: "scheduled",
    date: new Date("2025-03-27"),
    assignedTo: "SafeGuard Pest Control",
    scheduledDate: new Date("2025-04-10"),
  },
  {
    id: 5,
    title: "Water Leak Investigation",
    location: "Level 3 Corridor",
    description: "Water stain appearing on ceiling near Unit 18. Need to investigate source of potential leak.",
    requestedBy: "Unit 18",
    priority: "high",
    status: "pending",
    date: new Date("2025-04-02"),
    assignedTo: null,
  },
  {
    id: 6,
    title: "Parking Gate Repair",
    location: "Basement Parking",
    description: "The automatic gate to the basement parking is operating intermittently and sometimes gets stuck.",
    requestedBy: "Unit 9",
    priority: "medium",
    status: "in-progress",
    date: new Date("2025-03-30"),
    assignedTo: "SecureTech Gates",
  },
  {
    id: 7,
    title: "Gym Equipment Service",
    location: "Gymnasium",
    description: "Annual servicing of gym equipment as per warranty requirements.",
    requestedBy: "Committee",
    priority: "low",
    status: "scheduled",
    date: new Date("2025-04-01"),
    assignedTo: "FitEquip Maintenance",
    scheduledDate: new Date("2025-04-15"),
  },
];

const priorityColors = {
  high: "bg-red-100 text-red-800",
  medium: "bg-yellow-100 text-yellow-800",
  low: "bg-blue-100 text-blue-800",
};

const statusColors = {
  "pending": "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  "completed": "bg-green-100 text-green-800",
  "scheduled": "bg-purple-100 text-purple-800",
};

const statusIcons = {
  "pending": Clock,
  "in-progress": Wrench,
  "completed": CheckCircle,
  "scheduled": CalendarIcon,
};

const Maintenance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredRequests = maintenanceRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          request.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          request.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = activeTab === "all" || request.status === activeTab;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Maintenance Management</h1>
            <p className="text-muted-foreground">
              Track and manage building maintenance requests
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </div>

        <Card>
          <CardHeader className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>
                  Manage all maintenance and repair requests
                </CardDescription>
              </div>
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search requests..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredRequests.length === 0 ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Wrench className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">No maintenance requests found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try changing your search query or filter criteria.
                  </p>
                </div>
              ) : (
                filteredRequests.map((request) => {
                  const StatusIcon = statusIcons[request.status as keyof typeof statusIcons] || AlertTriangle;
                  
                  return (
                    <div
                      key={request.id}
                      className="border rounded-lg p-4 bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{request.title}</h3>
                            <Badge className={cn(priorityColors[request.priority as keyof typeof priorityColors])}>
                              {request.priority}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span>{request.location}</span>
                            <span>•</span>
                            <span>Requested: {format(request.date, "MMM d, yyyy")}</span>
                            <span>•</span>
                            <span>By: {request.requestedBy}</span>
                          </div>
                          
                          <p className="text-sm mt-2">{request.description}</p>
                          
                          {request.assignedTo && (
                            <p className="text-sm text-muted-foreground mt-1">
                              <span className="font-medium">Assigned to:</span> {request.assignedTo}
                            </p>
                          )}
                          
                          {request.scheduledDate && (
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Scheduled for:</span> {format(request.scheduledDate, "MMM d, yyyy")}
                            </p>
                          )}
                          
                          {request.completionDate && (
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Completed on:</span> {format(request.completionDate, "MMM d, yyyy")}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Badge className={cn(statusColors[request.status as keyof typeof statusColors], "flex items-center gap-1")}>
                            <StatusIcon className="h-3 w-3" />
                            <span>{request.status.replace("-", " ")}</span>
                          </Badge>
                          
                          <Button variant="outline" size="sm">Details</Button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Maintenance;
