
import { Bell, Info, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const notices = [
  {
    id: 1,
    title: "Water Shutdown Notice",
    description: "Maintenance on main water lines will occur on April 7th from 10AM to 2PM.",
    date: new Date("2025-04-02"),
    type: "important",
    icon: AlertTriangle,
  },
  {
    id: 2,
    title: "New By-Law Proposal",
    description: "Committee is proposing a new by-law regarding pet ownership to be voted on at the next AGM.",
    date: new Date("2025-04-01"),
    type: "info",
    icon: Info,
  },
  {
    id: 3,
    title: "Fire Alarm Testing",
    description: "Annual fire alarm testing scheduled for April 12th. Short intermittent alarms expected.",
    date: new Date("2025-03-30"),
    type: "announcement",
    icon: Bell,
  },
];

const noticeStyles = {
  important: {
    border: "border-red-300",
    icon: "text-red-500",
    bg: "bg-red-50"
  },
  info: {
    border: "border-blue-300",
    icon: "text-blue-500",
    bg: "bg-blue-50"
  },
  announcement: {
    border: "border-amber-300",
    icon: "text-amber-500",
    bg: "bg-amber-50"
  }
};

const NoticeBoard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Notice Board</CardTitle>
        <CardDescription>Important announcements and information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notices.map((notice) => {
            const style = noticeStyles[notice.type as keyof typeof noticeStyles];
            return (
              <div 
                key={notice.id} 
                className={cn(
                  "p-3 rounded-md border",
                  style.border,
                  style.bg
                )}
              >
                <div className="flex gap-3">
                  <div className={cn("mt-1", style.icon)}>
                    <notice.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{notice.title}</h3>
                    <p className="text-xs mt-1">{notice.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Posted: {format(notice.date, "MMM d, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeBoard;
