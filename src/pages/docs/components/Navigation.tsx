import DocLayout from "@/components/DocLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Navigation = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Navigation Components</h1>
        
        <p>
          Navigation is crucial for user experience. DocSite provides various navigation 
          components including breadcrumbs, navigation menus, and pagination to help users 
          find their way around your application.
        </p>

        <h2>Breadcrumbs</h2>
        
        <p>
          Breadcrumbs show users their current location within a hierarchy and provide 
          a way to navigate back to parent pages.
        </p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview">
            <div className="p-6 border rounded-lg bg-background">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navigation</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </TabsContent>
          
          <TabsContent value="code">
            <pre><code>{`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Navigation</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Navigation Menus</h2>
        
        <p>Create complex navigation structures with dropdowns and nested items:</p>

        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simple">Simple Menu</TabsTrigger>
            <TabsTrigger value="complex">Complex Menu</TabsTrigger>
          </TabsList>
          
          <TabsContent value="simple">
            <div className="p-6 border rounded-lg bg-background">
              <nav className="flex space-x-4">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Services</Button>
                <Button variant="ghost">Contact</Button>
              </nav>
            </div>
            <pre className="mt-4"><code>{`<nav className="flex space-x-4">
  <Button variant="ghost">Home</Button>
  <Button variant="ghost">About</Button>
  <Button variant="ghost">Services</Button>
  <Button variant="ghost">Contact</Button>
</nav>`}</code></pre>
          </TabsContent>
          
          <TabsContent value="complex">
            <div className="p-6 border rounded-lg bg-background">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <div className="grid gap-1">
                          <h4 className="text-sm font-semibold">Web Development</h4>
                          <p className="text-sm text-muted-foreground">
                            Full-stack web applications
                          </p>
                        </div>
                        <div className="grid gap-1">
                          <h4 className="text-sm font-semibold">Mobile Apps</h4>
                          <p className="text-sm text-muted-foreground">
                            Native and cross-platform mobile solutions
                          </p>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">About</Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </TabsContent>
        </Tabs>

        <h2>Sidebar Navigation</h2>
        
        <p>Organize content with collapsible sidebar navigation:</p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview">
            <div className="p-6 border rounded-lg bg-background">
              <div className="flex">
                <div className="w-64 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Getting Started</h4>
                    <div className="space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start text-primary">
                        Introduction
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Installation
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Quick Start
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Components</h4>
                    <div className="space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Buttons
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Forms
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Navigation
                        <Badge variant="secondary" className="ml-auto">
                          New
                        </Badge>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="code">
            <pre><code>{`import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

<div className="w-64 space-y-4">
  <div>
    <h4 className="text-sm font-semibold mb-2">Getting Started</h4>
    <div className="space-y-1">
      <Button variant="ghost" size="sm" className="w-full justify-start text-primary">
        Introduction
      </Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">
        Installation
      </Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">
        Quick Start
      </Button>
    </div>
  </div>
  
  <Separator />
  
  <div>
    <h4 className="text-sm font-semibold mb-2">Components</h4>
    <div className="space-y-1">
      <Button variant="ghost" size="sm" className="w-full justify-start">
        Buttons
      </Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">
        Forms
      </Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">
        Navigation
        <Badge variant="secondary" className="ml-auto">
          New
        </Badge>
      </Button>
    </div>
  </div>
</div>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Tab Navigation</h2>
        
        <p>Use tabs to organize related content into separate views:</p>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Tabs</TabsTrigger>
            <TabsTrigger value="vertical">Vertical Tabs</TabsTrigger>
            <TabsTrigger value="pills">Pill Style</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic">
            <div className="p-6 border rounded-lg bg-background">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Manage your account settings and preferences.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Change your password and security settings.
                  </p>
                </TabsContent>
                <TabsContent value="notifications" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Configure your notification preferences.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
          
          <TabsContent value="vertical">
            <pre><code>{`// Custom vertical tab implementation
<div className="flex">
  <div className="flex flex-col space-y-2 w-48">
    <Button variant="ghost" className="justify-start">
      General
    </Button>
    <Button variant="secondary" className="justify-start">
      Security
    </Button>
    <Button variant="ghost" className="justify-start">
      Integrations
    </Button>
  </div>
  <div className="flex-1 ml-6">
    <h3>Security Settings</h3>
    <p>Configure your security preferences here.</p>
  </div>
</div>`}</code></pre>
          </TabsContent>
          
          <TabsContent value="pills">
            <pre><code>{`// Custom pill-style tabs
<div className="inline-flex rounded-lg bg-muted p-1">
  <Button variant="ghost" size="sm" className="rounded-md">
    Overview
  </Button>
  <Button variant="secondary" size="sm" className="rounded-md">
    Analytics
  </Button>
  <Button variant="ghost" size="sm" className="rounded-md">
    Reports
  </Button>
</div>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Mobile Navigation</h2>
        
        <p>Responsive navigation patterns for mobile devices:</p>

        <pre><code>{`import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b">
          <nav className="flex flex-col p-4 space-y-2">
            <Button variant="ghost" className="justify-start">
              Home
            </Button>
            <Button variant="ghost" className="justify-start">
              About
            </Button>
            <Button variant="ghost" className="justify-start">
              Services
            </Button>
            <Button variant="ghost" className="justify-start">
              Contact
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}`}</code></pre>

        <h2>Navigation States</h2>
        
        <p>Handle different navigation states effectively:</p>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active States</TabsTrigger>
            <TabsTrigger value="loading">Loading States</TabsTrigger>
            <TabsTrigger value="disabled">Disabled States</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="p-6 border rounded-lg bg-background space-y-2">
              <Button variant="secondary">Current Page</Button>
              <Button variant="ghost">Other Page</Button>
              <Button variant="ghost">Another Page</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="loading">
            <div className="p-6 border rounded-lg bg-background space-y-2">
              <Button disabled>
                Loading...
              </Button>
              <Button variant="ghost">Available</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="disabled">
            <div className="p-6 border rounded-lg bg-background space-y-2">
              <Button disabled>Disabled Link</Button>
              <Button variant="ghost">Available Link</Button>
            </div>
          </TabsContent>
        </Tabs>

        <h2>Best Practices</h2>
        
        <ul>
          <li><strong>Consistency:</strong> Use consistent navigation patterns throughout your app</li>
          <li><strong>Hierarchy:</strong> Make the navigation hierarchy clear and logical</li>
          <li><strong>Active States:</strong> Always indicate the current page or section</li>
          <li><strong>Mobile-First:</strong> Design navigation with mobile devices in mind</li>
          <li><strong>Accessibility:</strong> Ensure keyboard navigation and screen reader compatibility</li>
          <li><strong>Performance:</strong> Lazy load navigation content when possible</li>
        </ul>

        <div className="mt-12 p-6 bg-muted rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-foreground mb-2">🎯 Pro Tip</h4>
          <p className="text-foreground-muted mb-0">
            Test your navigation with keyboard-only users and screen readers to ensure 
            accessibility. Use semantic HTML elements like <code>&lt;nav&gt;</code> and 
            proper ARIA labels.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default Navigation;