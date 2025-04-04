
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users, Clock, FileText, Download, Plus, ChevronRight, Calendar as CalendarFull } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, isAfter, isBefore, isSameDay } from "date-fns";

// Sample meeting data
const meetings = [
  {
    id: 1,
    title: "Quarterly General Meeting",
    description: "Regular quarterly meeting to discuss building operations and finances",
    type: "general",
    date: new Date("2025-04-15T18:30:00"),
    location: "Community Hall",
    agenda: [
      "Approval of previous minutes",
      "Financial report and budget update",
      "Maintenance updates",
      "New business",
    ],
    files: [
      { name: "Q1 2025 Meeting Agenda.pdf", size: "420 KB" },
      { name: "Q4 2024 Meeting Minutes.pdf", size: "1.2 MB" },
      { name: "Q1 2025 Financial Report.pdf", size: "1.8 MB" },
    ],
    attendees: ["Committee Members", "All Lot Owners"]
  },
  {
    id: 2,
    title: "Committee Meeting",
    description: "Monthly committee meeting to discuss ongoing operational matters",
    type: "committee",
    date: new Date("2025-04-08T19:00:00"),
    location: "Meeting Room B",
    agenda: [
      "Approval of previous minutes",
      "Review of maintenance requests",
      "Discussion of levy arrears",
      "Planning for AGM",
    ],
    files: [
      { name: "Committee Meeting Agenda April 2025.pdf", size: "380 KB" },
      { name: "Committee Meeting Minutes March 2025.pdf", size: "950 KB" },
    ],
    attendees: ["Committee Members"]
  },
  {
    id: 3,
    title: "Budget Planning Session",
    description: "Special meeting to prepare the annual budget for the next financial year",
    type: "special",
    date: new Date("2025-04-22T17:00:00"),
    location: "Committee Office",
    agenda: [
      "Review of current financial position",
      "Capital works planning",
      "Setting levy amounts",
      "10-year forecast update",
    ],
    files: [
      { name: "Draft Budget FY2026.xlsx", size: "850 KB" },
      { name: "Capital Works Plan 2025-2035.pdf", size: "2.2 MB" },
    ],
    attendees: ["Treasurer", "Secretary", "Chairperson", "Building Manager"]
  },
  {
    id: 4,
    title: "Annual General Meeting",
    description: "Annual general meeting with election of committee members and annual reports",
    type: "agm",
    date: new Date("2025-05-20T18:00:00"),
    location: "Community Hall",
    agenda: [
      "Approval of previous AGM minutes",
      "Annual financial statements",
      "Appointment of auditor",
      "Election of committee members",
      "Determination of annual levies",
      "Special resolutions",
    ],
    files: [
      { name: "AGM Notice and Agenda 2025.pdf", size: "520 KB" },
      { name: "Proxy Form 2025.pdf", size: "320 KB" },
      { name: "Annual Financial Report FY2025.pdf", size: "2.8 MB" },
    ],
    attendees: ["All Lot Owners", "Strata Manager", "Building Manager"]
  },
  {
    id: 5,
    title: "Committee Meeting",
    description: "Monthly committee meeting to discuss ongoing operational matters",
    type: "committee",
    date: new Date("2025-03-10T19:00:00"),
    location: "Meeting Room B",
    agenda: [
      "Approval of previous minutes",
      "Review of maintenance requests",
      "Discussion of levy arrears",
      "Planning for upcoming events",
    ],
    files: [
      { name: "Committee Meeting Minutes February 2025.pdf", size: "920 KB" },
    ],
    attendees: ["Committee Members"]
  },
];

const typeColors = {
  general: "bg-blue-100 text-blue-800",
  committee: "bg-purple-100 text-purple-800",
  special: "bg-amber-100 text-amber-800",
  agm: "bg-green-100 text-green-800",
};

const getTimeStatus = (date: Date) => {
  const now = new Date();
  
  if (isAfter(date, now)) {
    return "upcoming";
  } else if (isSameDay(date, now)) {
    return "today";
  } else {
    return "past";
  }
};

const Meetings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const filteredMeetings = meetings.filter(meeting => {
    const timeStatus = getTimeStatus(meeting.date);
    
    if (activeTab === "upcoming") {
      return timeStatus === "upcoming" || timeStatus === "today";
    } else if (activeTab === "past") {
      return timeStatus === "past";
    }
    
    return true; // "all" tab
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Meetings</h1>
            <p className="text-muted-foreground">
              Schedule and manage strata meetings
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule Meeting
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Strata Meetings</CardTitle>
                <CardDescription>
                  View all scheduled and past meetings
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {filteredMeetings.length === 0 ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <CalendarFull className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-medium">No meetings found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {activeTab === "upcoming" 
                    ? "There are no upcoming meetings scheduled." 
                    : "There are no past meetings recorded."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMeetings.map((meeting) => {
                  const timeStatus = getTimeStatus(meeting.date);
                  const isUpcoming = timeStatus === "upcoming" || timeStatus === "today";
                  
                  return (
                    <div
                      key={meeting.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="bg-muted p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{meeting.title}</h3>
                            <Badge className={cn(typeColors[meeting.type as keyof typeof typeColors])}>
                              {meeting.type === "agm" ? "AGM" : meeting.type}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-3 w-3" />
                              <span>{format(meeting.date, "EEEE, MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{format(meeting.date, "h:mm a")}</span>
                            </div>
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {timeStatus === "today" && (
                            <Badge className="bg-emerald-100 text-emerald-800">Today</Badge>
                          )}
                          <Button size="sm" variant={isUpcoming ? "default" : "outline"}>
                            {isUpcoming ? "Join Meeting" : "View Details"}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-4">
                        <p className="text-sm">{meeting.description}</p>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Agenda</h4>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            {meeting.agenda.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Attendees
                            </h4>
                            <ul className="text-sm list-disc list-inside">
                              {meeting.attendees.map((attendee, index) => (
                                <li key={index}>{attendee}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Documents
                            </h4>
                            <ul className="text-sm space-y-1">
                              {meeting.files.map((file, index) => (
                                <li key={index} className="flex items-center justify-between">
                                  <span className="truncate">{file.name}</span>
                                  <div className="flex items-center text-muted-foreground">
                                    <span className="text-xs">{file.size}</span>
                                    <Button size="icon" variant="ghost" className="h-8 w-8">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Meetings;
