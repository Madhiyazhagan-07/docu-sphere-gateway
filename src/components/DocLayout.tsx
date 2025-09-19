import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface DocLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DocLayout = ({ children, className }: DocLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-surface">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-surface shadow-strong">
              <Sidebar />
            </div>
            <div 
              className="absolute inset-0" 
              onClick={() => setSidebarOpen(false)}
            />
          </div>
        )}

        {/* Main Content */}
        <main className={cn(
          "flex-1 md:ml-64",
          className
        )}>
          <div className="container max-w-4xl py-8 px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocLayout;