
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Wifi, Tv, Coffee, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/ui/ImageGallery";

const amenityImages = [
  {
    src: "/ap1.webp",
    alt: "Community Room Facilities"
  },
  {
    src: "/ap3.webp",
    alt: "Swimming Pool and Spa Area" 
  },
  {
    src: "/ap4.jpg",
    alt: "Modern Gym Equipment"
  }
];

const amenitiesData = [
  {
    name: "Community Room",
    description: "Large space for community gatherings and events",
    icon: Users,
    availability: "Available",
    capacity: "50 people",
    location: "Ground Floor"
  },
  {
    name: "Swimming Pool",
    description: "Heated indoor pool with changing facilities",
    icon: Tv,
    availability: "Available 6am-10pm",
    capacity: "20 people",
    location: "Level 2"
  },
  {
    name: "Gym",
    description: "Modern fitness equipment and free weights",
    icon: Dumbbell,
    availability: "24/7 access",
    capacity: "15 people",
    location: "Level 3"
  },
  {
    name: "Rooftop Garden",
    description: "Landscaped outdoor space with BBQ facilities",
    icon: Coffee,
    availability: "Available 7am-10pm",
    capacity: "30 people",
    location: "Rooftop"
  },
  {
    name: "Study Room",
    description: "Quiet space with desks and high-speed internet",
    icon: Wifi,
    availability: "24/7 access",
    capacity: "10 people",
    location: "Level 1"
  }
];

const Amenities = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Building Amenities</h1>
          <Button>Book an Amenity</Button>
        </div>
        
        <ImageGallery images={amenityImages} />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenitiesData.map((amenity, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <amenity.icon className="h-5 w-5 text-primary" />
                    {amenity.name}
                  </CardTitle>
                  <Badge variant={amenity.availability.includes("Available") ? "default" : "outline"}>
                    {amenity.availability.includes("Available") ? "Available" : "Restricted"}
                  </Badge>
                </div>
                <CardDescription>{amenity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Capacity: {amenity.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Location: {amenity.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Hours: {amenity.availability}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Reserve Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Amenities;
