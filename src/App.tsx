
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Committee from "./pages/Committee";
import Finances from "./pages/Finances";
import Documents from "./pages/Documents";
import Maintenance from "./pages/Maintenance";
import Meetings from "./pages/Meetings";
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
          <Route path="/committee" element={<Committee />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
