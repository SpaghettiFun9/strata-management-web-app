
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const committeeMembers = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Chairperson",
    unit: "Unit 12",
    email: "jane.doe@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Jane has been a resident for 5 years and is serving her second term as Chairperson. She has extensive experience in property management."
  },
  {
    id: 2,
    name: "John Smith",
    position: "Secretary",
    unit: "Unit 5",
    email: "john.smith@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "John is an attorney specializing in property law. His expertise has been invaluable in navigating complex strata regulations."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Treasurer",
    unit: "Unit 18",
    email: "sarah.johnson@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Sarah has a background in accounting and ensures the financial health of our strata scheme through careful budgeting and planning."
  },
  {
    id: 4,
    name: "Michael Wong",
    position: "Committee Member",
    unit: "Unit 7",
    email: "michael.wong@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Michael has expertise in building maintenance and oversees many of our routine and capital works projects."
  },
  {
    id: 5,
    name: "Emily Patel",
    position: "Committee Member",
    unit: "Unit 21",
    email: "emily.patel@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Emily has a background in community engagement and focuses on improving resident communication and organizing social events."
  },
];

const Committee = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Strata Committee</h1>
          <p className="text-muted-foreground">
            Meet the elected representatives managing your building
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>About the Committee</CardTitle>
            <CardDescription>
              Your strata committee is elected annually at the Annual General Meeting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Under the NSW Strata Schemes Management Act 2015, the strata committee is responsible for the day-to-day running of the strata scheme. The committee makes decisions on behalf of the owners corporation and is expected to act in the best interests of all owners.
            </p>
            <p className="text-sm mt-4">
              Key responsibilities include:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Administering the strata scheme's finances</li>
              <li>Organizing repairs and maintenance of common property</li>
              <li>Ensuring compliance with by-laws</li>
              <li>Managing insurance requirements</li>
              <li>Responding to correspondence and complaints</li>
              <li>Preparing for annual general meetings</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {committeeMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden card-hover">
              <CardContent className="p-0">
                <div className="relative h-44 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-white/90">{member.position}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium">Unit:</span> {member.unit}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Committee;
