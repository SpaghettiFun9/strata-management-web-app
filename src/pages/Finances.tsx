import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import FundBalances from "@/components/dashboard/FundBalances";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import ImageGallery from "@/components/ui/ImageGallery";

// Sample data for charts
const monthlyExpensesData = [
  { name: "Jan", admin: 12500, capital: 8500 },
  { name: "Feb", admin: 10800, capital: 9200 },
  { name: "Mar", admin: 11200, capital: 7800 },
  { name: "Apr", admin: 13500, capital: 10500 },
  { name: "May", admin: 9800, capital: 8200 },
  { name: "Jun", admin: 10500, capital: 9000 },
];

const levyPayments = [
  { name: "Quarter 1", expected: 65000, collected: 61500 },
  { name: "Quarter 2", expected: 65000, collected: 59800 },
  { name: "Quarter 3", expected: 65000, collected: 63200 },
  { name: "Quarter 4", expected: 65000, collected: 60500 },
];

const upcomingExpenses = [
  {
    id: 1,
    title: "Annual Building Insurance",
    amount: "$28,450",
    dueDate: "May 15, 2025",
    fund: "Administration",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Roof Replacement (Building A)",
    amount: "$75,000",
    dueDate: "June 30, 2025",
    fund: "Capital Works",
    status: "planned"
  },
  {
    id: 3,
    title: "Quarterly Gardening Service",
    amount: "$3,200",
    dueDate: "April 10, 2025",
    fund: "Administration",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Security System Upgrade",
    amount: "$12,500",
    dueDate: "July 22, 2025",
    fund: "Capital Works",
    status: "planned"
  },
  {
    id: 5,
    title: "Common Area Electricity",
    amount: "$2,850",
    dueDate: "April 30, 2025",
    fund: "Administration",
    status: "upcoming"
  }
];

const statusColors = {
  upcoming: "text-amber-600 bg-amber-50 border-amber-200",
  planned: "text-blue-600 bg-blue-50 border-blue-200",
  paid: "text-green-600 bg-green-50 border-green-200",
  overdue: "text-red-600 bg-red-50 border-red-200"
};

const fundColors = {
  Administration: "bg-primary",
  Capital: "bg-accent"
};

const financeImages = [
  {
    src: "/ap2.webp",
    alt: "Building Investment Projects"
  }
];

const Finances = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial Management</h1>
          <p className="text-muted-foreground">
            Track and manage strata finances and levy payments
          </p>
        </div>

        <ImageGallery 
          images={financeImages} 
          className="max-w-3xl mx-auto"
          imageHeight="h-48 md:h-64"
        />

        <Tabs defaultValue="overview" onValueChange={setSelectedTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FundBalances />
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Expenses Overview</CardTitle>
                  <CardDescription>Tracking expenses across funds</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={monthlyExpensesData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="admin" name="Administrative Fund" fill="hsl(var(--primary))" />
                        <Bar dataKey="capital" name="Capital Works Fund" fill="hsl(var(--accent))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Expenses</CardTitle>
                <CardDescription>Planned expenses for the next 90 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExpenses.map((expense) => (
                    <div
                      key={expense.id}
                      className={cn(
                        "p-4 rounded-md border flex items-center justify-between",
                        statusColors[expense.status as keyof typeof statusColors]
                      )}
                    >
                      <div className="space-y-1">
                        <h3 className="font-medium">{expense.title}</h3>
                        <p className="text-sm">Due: {expense.dueDate}</p>
                        <div className="flex items-center space-x-2">
                          <div
                            className={cn(
                              "h-2 w-2 rounded-full",
                              expense.fund === "Administration" ? "bg-primary" : "bg-accent"
                            )}
                          />
                          <p className="text-xs">{expense.fund} Fund</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{expense.amount}</p>
                        <p className="text-xs uppercase mt-1">{expense.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Finances;
