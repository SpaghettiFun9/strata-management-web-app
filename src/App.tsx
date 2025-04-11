
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Committee from "./pages/Committee";
import Finances from "./pages/Finances";
import Resources from "./pages/Resources";
import Maintenance from "./pages/Maintenance";
import Meetings from "./pages/Meetings";
import Amenities from "./pages/Amenities";
import ContactUs from "./pages/ContactUs";
import IncidentReport from "./pages/IncidentReport";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/incident-report" element={<IncidentReport />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
