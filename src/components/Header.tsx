import { useState } from "react";
import { Search, Menu, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="hidden font-bold sm:inline-block text-lg">
            DocSite
          </span>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary transition-smooth"
            />
          </div>
        </form>

        {/* Navigation */}
        <nav className="flex items-center space-x-2 ml-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/login")}
            className="hidden sm:inline-flex"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
          
          <Button
            onClick={() => navigate("/signup")}
            className="hidden sm:inline-flex gradient-primary text-white hover:opacity-90 transition-smooth"
          >
            Sign Up
          </Button>

          {/* Mobile user menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="sm:hidden">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate("/login")}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/signup")}>
                <User className="mr-2 h-4 w-4" />
                Sign Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;