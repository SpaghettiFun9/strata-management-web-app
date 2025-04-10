
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MessageSquare, ThumbsUp, Share2, Tag, Gift, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const eventsData = [
  {
    id: 1,
    title: "Community BBQ",
    date: "June 15, 2025",
    location: "Rooftop Garden",
    description: "Join us for our monthly community BBQ. BYO drinks, food will be provided.",
    category: "Social",
    attending: 18
  },
  {
    id: 2,
    title: "Garden Working Bee",
    date: "May 28, 2025",
    location: "Common Gardens",
    description: "Help maintain our beautiful common gardens. Tools will be provided.",
    category: "Volunteering",
    attending: 7
  },
  {
    id: 3,
    title: "Annual General Meeting",
    date: "July 10, 2025",
    location: "Community Room",
    description: "Annual general meeting to discuss building matters and elect new committee members.",
    category: "Meeting",
    attending: 24
  }
];

const noticesData = [
  {
    id: 1,
    title: "Elevator Maintenance",
    date: "Posted 2 days ago",
    content: "The north tower elevator will be under maintenance on May 20th from 10am to 2pm.",
    author: "Building Manager",
    type: "Maintenance"
  },
  {
    id: 2,
    title: "New Recycling Guidelines",
    date: "Posted 1 week ago",
    content: "Please review the new recycling guidelines attached. New bins will be installed next month.",
    author: "Sustainability Committee",
    type: "Announcement"
  },
  {
    id: 3,
    title: "Welcome to New Residents",
    date: "Posted 2 weeks ago",
    content: "Please join us in welcoming the Johnson family who have moved into apartment 12B.",
    author: "Community Coordinator",
    type: "Community"
  }
];

const Community = () => {
  const [commentText, setCommentText] = useState("");
  
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      // In a real app, we'd post this to an API
      console.log("New comment:", commentText);
      setCommentText("");
    }
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Community</h1>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" /> Calendar
            </Button>
            <Button size="sm">
              <Megaphone className="mr-2 h-4 w-4" /> Post Notice
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {/* Notice Board */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Community Notices</CardTitle>
                <CardDescription>Recent announcements and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {noticesData.map((notice) => (
                  <Card key={notice.id} className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">{notice.title}</CardTitle>
                          <CardDescription className="text-xs">{notice.date}</CardDescription>
                        </div>
                        <Badge variant="outline">{notice.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3 text-sm">
                      <p>{notice.content}</p>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">
                        Posted by: {notice.author}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </CardContent>
              <CardFooter>
                <form onSubmit={handleAddComment} className="space-y-3 w-full">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Input 
                      placeholder="Write a comment..." 
                      value={commentText} 
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={!commentText.trim()}>
                      Post Comment
                    </Button>
                  </div>
                </form>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {eventsData.map((event) => (
                  <div key={event.id} className="pb-4 border-b last:border-0 last:pb-0">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.date} • {event.location}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {event.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {event.attending} attending
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Events
                </Button>
              </CardFooter>
            </Card>
            
            {/* Community Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Community Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Residents Directory', 'Local Services', 'Building Rules', 'Lost & Found', 'Visitor Registration'].map((link, i) => (
                  <Button key={i} variant="ghost" className="w-full justify-start">
                    {link}
                  </Button>
                ))}
              </CardContent>
            </Card>
            
            {/* Marketplace */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Marketplace
                </CardTitle>
                <CardDescription>
                  Items for sale or free from residents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Dining Table & Chairs', 'Bookshelf', 'House Plants'].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm">{item}</span>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Post Item
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Community;
