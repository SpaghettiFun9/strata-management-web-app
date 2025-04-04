
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  trend?: "up" | "down";
  trendValue?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        
        {description && (
          <CardDescription className="text-xs text-muted-foreground mt-1">
            {description}
          </CardDescription>
        )}
        
        {trend && trendValue && (
          <p className={cn(
            "text-xs font-medium mt-2 flex items-center",
            trend === "up" ? "text-emerald-500" : "text-red-500"
          )}>
            <span className={cn(
              "inline-block mr-1",
              trend === "up" ? "rotate-0" : "rotate-180"
            )}>
              ↑
            </span>
            {trendValue}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
