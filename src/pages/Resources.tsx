
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Book, Scale, HelpCircle, Calculator, FileCode, Eye, Calendar, FileArchive, FileClock, Film, FileWarning } from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Sample document categories
const documentCategories = [
  { id: "bylaws", name: "By-Laws", icon: FileText },
  { id: "financial", name: "Financial Records", icon: FileArchive },
  { id: "minutes", name: "Meeting Minutes", icon: FileClock },
  { id: "reports", name: "Inspection Reports", icon: FileWarning },
  { id: "insurance", name: "Insurance Documents", icon: FileText },
  { id: "notices", name: "Notices & Communications", icon: FileText },
];

// Sample documents data
const documents = [
  {
    id: 1,
    title: "Strata Scheme By-Laws",
    description: "Current by-laws registered with NSW Land Registry Services",
    category: "bylaws",
    date: new Date("2023-05-15"),
    fileType: "pdf",
    fileSize: "2.4 MB",
  },
  {
    id: 2,
    title: "Pet By-Law Amendment",
    description: "Amendment to by-law 16 regarding pet ownership",
    category: "bylaws",
    date: new Date("2024-02-10"),
    fileType: "pdf",
    fileSize: "1.1 MB",
  },
  {
    id: 3,
    title: "Annual Financial Statement FY2024",
    description: "Audited financial statements for the 2024 fiscal year",
    category: "financial",
    date: new Date("2024-08-22"),
    fileType: "pdf",
    fileSize: "3.5 MB",
  },
  {
    id: 4,
    title: "Budget Forecast FY2025",
    description: "Projected budget and levy estimates for FY2025",
    category: "financial",
    date: new Date("2024-11-15"),
    fileType: "xlsx",
    fileSize: "785 KB",
  },
  {
    id: 5,
    title: "AGM Minutes - November 2024",
    description: "Minutes from the Annual General Meeting",
    category: "minutes",
    date: new Date("2024-11-30"),
    fileType: "pdf",
    fileSize: "1.8 MB",
  },
  {
    id: 6,
    title: "Committee Meeting Minutes - March 2025",
    description: "Minutes from the quarterly committee meeting",
    category: "minutes",
    date: new Date("2025-03-10"),
    fileType: "pdf",
    fileSize: "1.2 MB",
  },
  {
    id: 7,
    title: "Building Inspection Report",
    description: "Annual building condition assessment by licensed inspector",
    category: "reports",
    date: new Date("2024-09-05"),
    fileType: "pdf",
    fileSize: "5.2 MB",
  },
  {
    id: 8,
    title: "Fire Safety Compliance Certificate",
    description: "Annual fire safety statement and inspection report",
    category: "reports",
    date: new Date("2025-01-15"),
    fileType: "pdf",
    fileSize: "2.7 MB",
  },
  {
    id: 9,
    title: "Building Insurance Policy",
    description: "Current building and public liability insurance certificate",
    category: "insurance",
    date: new Date("2024-10-01"),
    fileType: "pdf",
    fileSize: "3.1 MB",
  },
  {
    id: 10,
    title: "Strata Roll",
    description: "Current register of lot owners and contact information",
    category: "insurance",
    date: new Date("2025-02-28"),
    fileType: "xlsx",
    fileSize: "1.5 MB",
  },
];

const fileTypeIcons = {
  pdf: <FileText className="h-6 w-6 text-red-500" />,
  xlsx: <FileText className="h-6 w-6 text-green-500" />,
  docx: <FileText className="h-6 w-6 text-blue-500" />,
  jpg: <Film className="h-6 w-6 text-purple-500" />,
  png: <Film className="h-6 w-6 text-purple-500" />,
};

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("documents");
  const [docCategory, setDocCategory] = useState("all");
  
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = docCategory === "all" || doc.category === docCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-2">
            Helpful information, resources and documents for residents and committee members
          </p>
        </div>

        <Tabs defaultValue="documents" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="legislation">Legislation</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                  <div>
                    <CardTitle>Document Repository</CardTitle>
                    <CardDescription>
                      All current strata scheme documentation
                    </CardDescription>
                  </div>
                  <Input
                    placeholder="Search documents..."
                    className="max-w-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" onValueChange={setDocCategory} className="space-y-6">
                  <TabsList className="flex flex-wrap">
                    <TabsTrigger value="all">All Documents</TabsTrigger>
                    {documentCategories.map((category) => (
                      <TabsTrigger key={category.id} value={category.id}>
                        <span className="flex items-center gap-2">
                          <category.icon className="h-4 w-4" />
                          {category.name}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <TabsContent value={docCategory} className="space-y-4">
                    {filteredDocuments.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <FileText className="mx-auto h-12 w-12 mb-4" />
                        <p className="text-lg font-medium">No documents found</p>
                        <p className="text-sm">Try adjusting your search or filter criteria</p>
                      </div>
                    ) : (
                      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        {filteredDocuments.map((doc) => (
                          <div
                            key={doc.id}
                            className="flex gap-4 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors"
                          >
                            <div className="p-2 flex items-center justify-center rounded-md border h-14 w-14">
                              {fileTypeIcons[doc.fileType as keyof typeof fileTypeIcons] || 
                              <FileText className="h-6 w-6 text-muted-foreground" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium truncate">{doc.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                                {doc.description}
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{format(doc.date, "MMM d, yyyy")}</span>
                                </div>
                                <div>{doc.fileType.toUpperCase()}</div>
                                <div>{doc.fileSize}</div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button size="icon" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {['Bylaws', 'Strata Plan', 'Annual Budget', 'Insurance Policy', 'Minutes Template', 'Complaint Form'].map((doc, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {doc}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {`Important ${doc.toLowerCase()} document for reference and compliance.`}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      <Button size="sm" variant="ghost" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="legislation" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Strata Schemes Management Act
                  </CardTitle>
                  <CardDescription>Key legislation governing strata schemes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The Strata Schemes Management Act provides the legal framework for the management and governance of strata schemes.
                  </p>
                  <Button variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    View Act
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    Strata Regulations
                  </CardTitle>
                  <CardDescription>Detailed regulations for strata schemes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The regulations provide detailed requirements for the management of strata schemes, including forms and processes.
                  </p>
                  <Button variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    View Regulations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="tutorials" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Committee Responsibilities", 
                  icon: HelpCircle, 
                  description: "Learn about the roles and responsibilities of strata committee members." 
                },
                { 
                  title: "Financial Management", 
                  icon: Calculator, 
                  description: "Guide to managing strata finances, budgeting, and levy collection." 
                },
                { 
                  title: "Meeting Procedures", 
                  icon: FileCode, 
                  description: "Step-by-step guide to running effective strata meetings." 
                },
                { 
                  title: "Dispute Resolution", 
                  icon: Scale, 
                  description: "Processes for resolving disputes within the strata community." 
                }
              ].map((tutorial, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <tutorial.icon className="h-5 w-5 text-primary" />
                      {tutorial.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tutorial.description}
                    </p>
                    <Button variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      View Tutorial
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Resources;
