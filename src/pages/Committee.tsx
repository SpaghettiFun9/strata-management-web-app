
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from "lucide-react";
import ImageGallery from "@/components/ui/ImageGallery";

const committeeImages = [
  {
    src: "/ap1.webp",
    alt: "Committee Meeting Room"
  },
  {
    src: "/ap3.webp",
    alt: "Management Office Entrance"
  }
];

const committeeMembers = [
  {
    name: "Kevin Phan",
    role: "Chairperson",
    email: "chair@oceaniaviews.com",
    phone: "(02) 8123 4567 ext. 101",
    bio: "Kevin has been the chairperson since 2022 and has extensive experience in property management."
  },
  {
    name: "Sarah Johnson",
    role: "Secretary",
    email: "secretary@oceaniaviews.com",
    phone: "(02) 8123 4567 ext. 102",
    bio: "Sarah handles all communication and record-keeping for the strata committee."
  },
  {
    name: "Michael Wong",
    role: "Treasurer",
    email: "treasurer@oceaniaviews.com",
    phone: "(02) 8123 4567 ext. 103",
    bio: "Michael oversees the financial management of the building, including levies and budgeting."
  },
  {
    name: "Lisa Patel",
    role: "Maintenance Coordinator",
    email: "maintenance@oceaniaviews.com",
    phone: "(02) 8123 4567 ext. 104",
    bio: "Lisa is responsible for coordinating all maintenance and repair work for the building."
  }
];

const Committee = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Strata Committee</h1>
          <p className="text-muted-foreground">
            Meet your building's strata committee members
          </p>
        </div>

        <ImageGallery images={committeeImages} />

        <div className="grid gap-6 md:grid-cols-2">
          {committeeMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="mt-1">{member.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Contact</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Committee;
