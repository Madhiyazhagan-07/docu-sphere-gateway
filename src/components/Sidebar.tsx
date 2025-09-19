import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  Code, 
  Zap, 
  Shield, 
  Database, 
  Palette,
  Settings,
  HelpCircle 
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ]
  },
  {
    title: "Components",
    icon: Code,
    items: [
      { title: "Buttons", href: "/docs/components/buttons" },
      { title: "Forms", href: "/docs/components/forms" },
      { title: "Navigation", href: "/docs/components/navigation" },
      { title: "Cards", href: "/docs/components/cards" },
    ]
  },
  {
    title: "Advanced",
    icon: Zap,
    items: [
      { title: "Performance", href: "/docs/advanced/performance" },
      { title: "Optimization", href: "/docs/advanced/optimization" },
      { title: "Best Practices", href: "/docs/advanced/best-practices" },
    ]
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      { title: "Authentication", href: "/docs/security/authentication" },
      { title: "Authorization", href: "/docs/security/authorization" },
      { title: "Security Guidelines", href: "/docs/security/guidelines" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    items: [
      { title: "Setup", href: "/docs/database/setup" },
      { title: "Queries", href: "/docs/database/queries" },
      { title: "Migrations", href: "/docs/database/migrations" },
    ]
  },
  {
    title: "Styling",
    icon: Palette,
    items: [
      { title: "Theme System", href: "/docs/styling/theme" },
      { title: "Custom CSS", href: "/docs/styling/custom-css" },
      { title: "Dark Mode", href: "/docs/styling/dark-mode" },
    ]
  }
];

const Sidebar = ({ className }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <ScrollArea className="h-[600px] px-1">
            <div className="space-y-6">
              {sidebarItems.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center px-4 py-2 text-sm font-medium text-foreground-muted">
                    <section.icon className="mr-2 h-4 w-4" />
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Button
                        key={item.href}
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "w-full justify-start px-6 text-foreground-muted hover:text-foreground hover:bg-muted transition-smooth",
                          location.pathname === item.href && "bg-muted text-foreground font-medium"
                        )}
                        onClick={() => navigate(item.href)}
                      >
                        {item.title}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;