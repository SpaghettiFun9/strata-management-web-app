
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const funds = [
  {
    id: 1,
    name: "Administration Fund",
    balance: "$45,280",
    target: "$50,000",
    progress: 90,
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Capital Works Fund",
    balance: "$127,500",
    target: "$150,000",
    progress: 85,
    color: "bg-accent"
  },
  {
    id: 3,
    name: "Sinking Fund",
    balance: "$32,650",
    target: "$75,000",
    progress: 43,
    color: "bg-amber-500"
  }
];

const FundBalances = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Fund Balances</CardTitle>
        <CardDescription>Current balances across all strata funds</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {funds.map((fund) => (
            <div key={fund.id} className="space-y-2">
              <div className="flex justify-between">
                <h4 className="font-medium text-sm">{fund.name}</h4>
                <div className="text-sm font-medium">
                  {fund.balance}
                  <span className="text-xs text-muted-foreground ml-1">
                    / {fund.target}
                  </span>
                </div>
              </div>
              <Progress 
                value={fund.progress} 
                className="h-2" 
                indicatorClassName={fund.color} 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FundBalances;
