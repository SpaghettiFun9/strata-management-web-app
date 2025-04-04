
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center">
          <AlertTriangle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Page Not Found</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-6">
          <Button onClick={() => navigate("/")} className="mr-4">
            Return to Dashboard
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
