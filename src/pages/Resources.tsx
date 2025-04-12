
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink, BookOpen, FileCode, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/ui/ImageGallery";

const buildingImages = [
  {
    src: "/ap2.webp",
    alt: "Exterior Building View"
  },
  {
    src: "/ap1.webp",
    alt: "Building Common Areas"
  }
];

// Add your resources here
const resourcesData = [
  {
    title: "Building Bylaws",
    description: "Official building bylaws and regulations",
    icon: FileText,
    link: "#",
    category: "Legal"
  },
  {
    title: "Resident Handbook",
    description: "Guidelines for all residents",
    icon: BookOpen,
    link: "#",
    category: "Guides"
  },
  {
    title: "Maintenance Schedule",
    description: "Upcoming maintenance activities",
    icon: FileCode,
    link: "#",
    category: "Maintenance"
  },
  {
    title: "Floor Plans",
    description: "Building floor plans and layouts",
    icon: Building,
    link: "#",
    category: "Building"
  }
];

const Resources = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Resources & Documents</h1>
          <p className="text-muted-foreground mt-2">
            Access important building documents and information
          </p>
        </div>

        <ImageGallery images={buildingImages} imageHeight="h-56 md:h-72" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resourcesData.map((resource, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
