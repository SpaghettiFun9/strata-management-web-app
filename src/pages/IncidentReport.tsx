
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const incidentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  date: z.string().min(1, "Please select a date"),
  location: z.string().min(1, "Please specify the location"),
  type: z.string().min(1, "Please select the incident type"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type IncidentFormValues = z.infer<typeof incidentFormSchema>;

const IncidentReport = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<IncidentFormValues>({
    resolver: zodResolver(incidentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      location: "",
      type: "",
      description: "",
    },
  });

  const onSubmit = (data: IncidentFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Incident report submitted:", data);
      toast({
        title: "Report Submitted",
        description: "Your incident report has been submitted successfully. Reference #INC-" + Math.floor(10000 + Math.random() * 90000),
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Incident Report</h1>
          <p className="text-muted-foreground mt-2">
            Report suspicious activity or security-related incidents within the building
          </p>
        </div>

        <Alert className="bg-amber-50 border-amber-200">
          <ShieldAlert className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Safety First</AlertTitle>
          <AlertDescription className="text-amber-700">
            If this is an emergency, please call emergency services directly at 000 before submitting a report.
          </AlertDescription>
        </Alert>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Submit an Incident Report</CardTitle>
            <CardDescription>
              Please provide as much detail as possible about what you observed.
              All reports are treated confidentially.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your contact number" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Incident</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Where did it happen?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Incident Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select incident type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="suspicious_person">Suspicious Person</SelectItem>
                            <SelectItem value="security_breach">Security Breach</SelectItem>
                            <SelectItem value="safety_hazard">Safety Hazard</SelectItem>
                            <SelectItem value="noise_complaint">Noise Complaint</SelectItem>
                            <SelectItem value="property_damage">Property Damage</SelectItem>
                            <SelectItem value="theft">Theft</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Incident Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide a detailed description of what happened"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Report"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">What happens after you submit a report?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ol className="list-decimal list-inside space-y-2">
              <li>Your report is logged in our secure system</li>
              <li>The strata committee reviews all reports within 24-48 hours</li>
              <li>We may contact you for additional information if needed</li>
              <li>Appropriate action will be taken based on the severity and nature of the incident</li>
              <li>You'll receive updates on significant developments related to your report</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default IncidentReport;
