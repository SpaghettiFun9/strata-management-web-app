
import { Banknote, Users, FileText, Wrench, Calendar, ChevronDown } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/dashboard/StatCard";
import MaintenanceRequests from "@/components/dashboard/MaintenanceRequests";
import UpcomingMeetings from "@/components/dashboard/UpcomingMeetings";
import FundBalances from "@/components/dashboard/FundBalances";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// FAQ questions and answers
const faqItems = [
  {
    question: "When is the next strata committee meeting?",
    answer: "The next strata committee meeting is scheduled for May 15th, 2025 at 7:00 PM in the community room. All residents are welcome to attend."
  },
  {
    question: "How do I report maintenance issues?",
    answer: "You can report maintenance issues through the Maintenance page on this portal, or by emailing maintenance@oceaniaviews.com with details of the issue."
  },
  {
    question: "What are the pool operating hours?",
    answer: "The pool is open daily from 6:00 AM to 10:00 PM. Please respect quiet hours and pool rules posted in the pool area."
  },
  {
    question: "How do I pay my strata levies?",
    answer: "Strata levies can be paid quarterly through direct deposit, check, or by setting up automatic payments. Contact the treasurer for more details."
  },
  {
    question: "Can I renovate my apartment?",
    answer: "Renovations require prior approval from the strata committee. Please submit detailed plans including contractor information and timeline at least 30 days before your intended start date."
  }
];

// Building images for the carousel
const buildingImages = [
  {
    src: "/ap1.webp",
    alt: "Medium shot view of complex"
  },
  {
    src: "/ap2.webp",
    alt: "Extreme long shot view"
  },
  {
    src: "/ap3.webp",
    alt: "Apartment lobby"
  },
  {
    src: "ap4.jpg",
    alt: "Apartment room interior"
  }
];

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Building Dashboard</h1>
        </div>

        {/* Building Images Carousel */}
        <div className="relative mx-auto max-w-4xl">
          <Card className="border-none shadow-lg overflow-hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {buildingImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-md">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-medium">{image.alt}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Units"
            value="24"
            description="In 3 buildings"
            icon={Users}
          />
          <StatCard
            title="Total Levies"
            value="$285,450"
            description="Annual collection target"
            icon={Banknote}
            trend="up"
            trendValue="5.2% from last year"
          />
          <StatCard
            title="Documents"
            value="58"
            description="Required strata records"
            icon={FileText}
          />
          <StatCard
            title="Pending Requests"
            value="7"
            description="Maintenance issues"
            icon={Wrench}
          />
        </div>

        {/* First Row */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <NoticeBoard />
          <FundBalances />
        </div>

        {/* Second Row */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <MaintenanceRequests />
          <UpcomingMeetings />
        </div>
        
        {/* Community FAQ Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Community FAQ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Index;
