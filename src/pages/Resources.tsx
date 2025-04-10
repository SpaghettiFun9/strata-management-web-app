
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Book, Scale, HelpCircle, Calculator, FileCode } from "lucide-react";

const Resources = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-2">
            Helpful information and documents for residents and committee members
          </p>
        </div>

        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="legislation">Legislation</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="space-y-6">
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
