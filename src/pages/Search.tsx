import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ArrowLeft, BookOpen, Code, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API
  const searchData = [
    {
      id: 1,
      title: "Introduction to DocSite",
      excerpt: "Welcome to DocSite, your comprehensive documentation platform. This guide will help you get started quickly...",
      category: "Getting Started",
      href: "/docs/introduction",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Installation Guide",
      excerpt: "This guide will walk you through the process of installing and setting up DocSite for your project...",
      category: "Getting Started",
      href: "/docs/installation",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Button Components",
      excerpt: "Buttons are one of the most important interactive elements in your documentation. DocSite provides...",
      category: "Components",
      href: "/docs/components/buttons",
      icon: Code
    },
    {
      id: 4,
      title: "Performance Optimization",
      excerpt: "Learn how to optimize your documentation site for maximum performance and user experience...",
      category: "Advanced",
      href: "/docs/advanced/performance",
      icon: Zap
    },
    {
      id: 5,
      title: "Authentication Setup",
      excerpt: "Implement secure authentication in your documentation site with our comprehensive guide...",
      category: "Security",
      href: "/docs/security/authentication",
      icon: Shield
    },
    {
      id: 6,
      title: "Forms and Inputs",
      excerpt: "Create beautiful and accessible forms using DocSite's form components and validation...",
      category: "Components",
      href: "/docs/components/forms",
      icon: Code
    }
  ];

  useEffect(() => {
    if (query.trim()) {
      // Simple search implementation - in a real app, use a proper search engine
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    const newSearchParams = new URLSearchParams();
    if (query.trim()) {
      newSearchParams.set("q", query.trim());
    }
    navigate(`/search?${newSearchParams.toString()}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/60">
        <div className="container flex h-16 max-w-screen-2xl items-center px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="flex items-center space-x-2 mr-6">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="hidden font-bold sm:inline-block text-lg">
              DocSite
            </span>
          </div>

          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
              <Input
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary transition-smooth"
                autoFocus
              />
            </div>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl py-8 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Documentation</h1>
          {query && (
            <p className="text-foreground-muted">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
          )}
        </div>

        {/* Search Results */}
        {query && results.length > 0 && (
          <div className="space-y-4">
            {results.map((result) => (
              <Card 
                key={result.id}
                className="group hover:shadow-medium transition-smooth cursor-pointer border-0 shadow-soft"
                onClick={() => navigate(result.href)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                      <result.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1 group-hover:text-primary transition-smooth">
                        {result.title}
                      </CardTitle>
                      <div className="text-sm text-primary font-medium mb-2">
                        {result.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground-muted line-clamp-2">
                    {result.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {query && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-foreground-subtle mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-foreground-muted mb-6">
              We couldn't find any documentation matching "{query}". Try different keywords or browse our categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate("/docs/introduction")}>
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Documentation
              </Button>
              <Button variant="outline" onClick={() => setQuery("")}>
                Clear Search
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!query && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-foreground-subtle mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Search Documentation</h2>
            <p className="text-foreground-muted mb-8 max-w-md mx-auto">
              Enter a search term above to find relevant documentation, guides, and examples.
            </p>
            
            <div className="max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["installation", "components", "authentication", "styling", "performance"].map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(term)}
                    className="capitalize"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;