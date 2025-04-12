
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Calendar, User, Users } from "lucide-react";

type CommitteeMemberType = 'Executive' | 'General' | 'Subcommittee';

interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  unit: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  type: CommitteeMemberType;
  term: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Chairperson",
    unit: "Unit 12",
    email: "jane.doe@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Jane has been a resident for 5 years and is serving her second term as Chairperson. She has extensive experience in property management.",
    type: "Executive",
    term: "2023-2025"
  },
  {
    id: 2,
    name: "John Smith",
    position: "Secretary",
    unit: "Unit 5",
    email: "john.smith@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "John is an attorney specializing in property law. His expertise has been invaluable in navigating complex strata regulations.",
    type: "Executive",
    term: "2023-2025"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Treasurer",
    unit: "Unit 18",
    email: "sarah.johnson@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Sarah has a background in accounting and ensures the financial health of our strata scheme through careful budgeting and planning.",
    type: "Executive",
    term: "2023-2025"
  },
  {
    id: 4,
    name: "Michael Wong",
    position: "Committee Member",
    unit: "Unit 7",
    email: "michael.wong@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Michael has expertise in building maintenance and oversees many of our routine and capital works projects.",
    type: "General",
    term: "2023-2024"
  },
  {
    id: 5,
    name: "Emily Patel",
    position: "Committee Member",
    unit: "Unit 21",
    email: "emily.patel@example.com",
    phone: "+61 4XX XXX XXX",
    photo: "/placeholder.svg",
    bio: "Emily has a background in community engagement and focuses on improving resident communication and organizing social events.",
    type: "Subcommittee",
    term: "2023-2024"
  },
];

const getBadgeVariant = (type: CommitteeMemberType) => {
  switch (type) {
    case 'Executive':
      return 'default';
    case 'General':
      return 'secondary';
    case 'Subcommittee':
      return 'outline';
    default:
      return 'default';
  }
};

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
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
            <CardTitle>About the Committee</CardTitle>
            <CardDescription>
              Your strata committee is elected annually at the Annual General Meeting
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm">
              Under the NSW Strata Schemes Management Act 2015, the strata committee is responsible for the day-to-day running of the strata scheme. The committee makes decisions on behalf of the owners corporation and is expected to act in the best interests of all owners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Executive Members
                </h3>
                <p className="text-sm">Required positions including Chairperson, Secretary, and Treasurer with specific duties under the Act.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-600 mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  General Members
                </h3>
                <p className="text-sm">Committee members who participate in decisions but don't hold specific executive positions.</p>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg">
                <h3 className="font-semibold text-stone-600 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Subcommittee Members
                </h3>
                <p className="text-sm">Members assigned to specific areas like gardening, social events, or building improvements.</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Key responsibilities include:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Administering the strata scheme's finances</li>
                <li>Organizing repairs and maintenance of common property</li>
                <li>Ensuring compliance with by-laws</li>
                <li>Managing insurance requirements</li>
                <li>Responding to correspondence and complaints</li>
                <li>Preparing for annual general meetings</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {committeeMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden card-hover border-t-4" 
                  style={{ borderTopColor: member.type === 'Executive' ? '#3b82f6' : 
                                          member.type === 'General' ? '#64748b' : '#a8a29e' }}>
              <CardContent className="p-0">
                <div className="relative h-44">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-slate-200 to-slate-100">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 text-gray-800">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-primary font-medium">{member.position}</p>
                        <Badge variant={getBadgeVariant(member.type)}>{member.type}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm"><span className="font-medium">Unit:</span> {member.unit}</p>
                      <p className="text-sm"><span className="font-medium">Term:</span> {member.term}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
                <CardFooter className="bg-slate-50 px-4 py-3">
                  <div className="text-xs text-slate-500 w-full text-center">
                    {member.type === 'Executive' ? 'Executive Officer' : 
                     member.type === 'General' ? 'General Committee Member' : 'Subcommittee Member'}
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Committee;
