import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Code, Zap, Search, Users, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Guides",
      description: "Step-by-step tutorials and detailed documentation for all features",
      href: "/docs/introduction"
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Ready-to-use code snippets and component examples",
      href: "/docs/components/buttons"
    },
    {
      icon: Zap,
      title: "Advanced Topics",
      description: "Performance optimization and best practices",
      href: "/docs/advanced/performance"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Authentication, authorization and security guidelines",
      href: "/docs/security/authentication"
    }
  ];

  const popularTopics = [
    { title: "Getting Started", href: "/docs/introduction", category: "Basics" },
    { title: "Components", href: "/docs/components/buttons", category: "UI" },
    { title: "Authentication", href: "/docs/security/authentication", category: "Security" },
    { title: "Performance", href: "/docs/advanced/performance", category: "Advanced" },
    { title: "Database Setup", href: "/docs/database/setup", category: "Backend" },
    { title: "Styling", href: "/docs/styling/theme", category: "Design" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/60">
        <div className="container flex h-16 max-w-screen-2xl items-center px-4 justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-lg">DocSite</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="hidden sm:inline-flex"
            >
              Login
            </Button>
            
            <Button
              onClick={() => navigate("/signup")}
              className="gradient-primary text-white hover:opacity-90 transition-smooth"
            >
              Sign Up
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-subtle py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="mr-2 h-4 w-4" />
              Comprehensive Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
              Learn, Build, Succeed
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
              Everything you need to know, all in one place. From beginner guides to advanced techniques, 
              we've got you covered with comprehensive documentation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-medium"
              onClick={() => navigate("/docs/introduction")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-surface hover:bg-surface-elevated border-border shadow-soft transition-smooth"
            >
              <Search className="mr-2 h-4 w-4" />
              Search Docs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground-muted">Documentation Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-foreground-muted">Always Updated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <div className="text-foreground-muted">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Explore our comprehensive documentation covering all aspects of development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-smooth cursor-pointer border-0 shadow-soft hover:-translate-y-1"
                onClick={() => navigate(feature.href)}
              >
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground-muted">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 px-4 bg-surface">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Topics</h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Start with the most popular documentation sections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((topic, index) => (
              <Card 
                key={index}
                className="group hover:shadow-soft transition-smooth cursor-pointer border-0 bg-surface-elevated hover:bg-background"
                onClick={() => navigate(topic.href)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-foreground-muted mt-1">{topic.category}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-foreground-subtle group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Card className="gradient-primary p-12 border-0 shadow-strong">
            <CardContent className="p-0">
              <div className="mb-6">
                <Users className="h-16 w-16 text-white mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Our Community
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                  Get access to exclusive content, early updates, and connect with other developers
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-white shadow-soft"
                  onClick={() => navigate("/signup")}
                >
                  Create Account
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur"
                  onClick={() => navigate("/docs/introduction")}
                >
                  Browse Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-surface py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg">DocSite</span>
            </div>
            <div className="text-sm text-foreground-muted">
              © 2024 DocSite. Built with ❤️ for developers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
