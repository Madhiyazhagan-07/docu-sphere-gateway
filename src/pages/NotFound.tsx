import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="h-24 w-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-white font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-foreground-muted mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="bg-surface hover:bg-surface-elevated"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => window.location.href = "/"}
            className="gradient-primary text-white hover:opacity-90 transition-smooth"
          >
            <Home className="mr-2 h-4 w-4" />
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
