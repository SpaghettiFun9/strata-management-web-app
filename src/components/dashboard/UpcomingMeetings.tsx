
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

// Sample upcoming meetings data
const upcomingMeetings = [
  {
    id: 1,
    title: "Quarterly General Meeting",
    date: new Date("2025-04-15T18:30:00"),
    location: "Community Hall",
  },
  {
    id: 2,
    title: "Committee Meeting",
    date: new Date("2025-04-08T19:00:00"),
    location: "Meeting Room B",
  },
  {
    id: 3,
    title: "Budget Planning Session",
    date: new Date("2025-04-22T17:00:00"),
    location: "Committee Office",
  },
];

const UpcomingMeetings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Meetings</CardTitle>
        <CardDescription>Your scheduled meetings for the next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="flex gap-4 p-3 bg-background rounded-md">
              <div className="flex flex-col items-center justify-center min-w-14 bg-primary/10 rounded-md p-2">
                <span className="text-primary text-xs font-medium">
                  {format(meeting.date, "MMM")}
                </span>
                <span className="text-xl font-bold text-primary">
                  {format(meeting.date, "dd")}
                </span>
              </div>
              <div>
                <h4 className="font-medium">{meeting.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {format(meeting.date, "h:mm a")}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {meeting.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMeetings;
