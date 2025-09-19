import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import Buttons from "./pages/docs/components/Buttons";
import Forms from "./pages/docs/components/Forms";
import Navigation from "./pages/docs/components/Navigation";
import Cards from "./pages/docs/components/Cards";
import Performance from "./pages/docs/advanced/Performance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          
          {/* Documentation Routes */}
          <Route path="/docs/introduction" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/quick-start" element={<QuickStart />} />
          <Route path="/docs/components/buttons" element={<Buttons />} />
          <Route path="/docs/components/forms" element={<Forms />} />
          <Route path="/docs/components/navigation" element={<Navigation />} />
          <Route path="/docs/components/cards" element={<Cards />} />
          <Route path="/docs/advanced/performance" element={<Performance />} />
          <Route path="/docs/advanced/optimization" element={<Introduction />} />
          <Route path="/docs/advanced/best-practices" element={<Introduction />} />
          <Route path="/docs/security/authentication" element={<Introduction />} />
          <Route path="/docs/security/authorization" element={<Introduction />} />
          <Route path="/docs/security/guidelines" element={<Introduction />} />
          <Route path="/docs/database/setup" element={<Introduction />} />
          <Route path="/docs/database/queries" element={<Introduction />} />
          <Route path="/docs/database/migrations" element={<Introduction />} />
          <Route path="/docs/styling/theme" element={<Introduction />} />
          <Route path="/docs/styling/custom-css" element={<Introduction />} />
          <Route path="/docs/styling/dark-mode" element={<Introduction />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
