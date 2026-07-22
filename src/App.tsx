import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CitizenLogin from "./pages/CitizenLogin.tsx";
import CitizenApp from "./pages/CitizenApp.tsx";
import CommandLogin from "./pages/CommandLogin.tsx";
import CommandDashboard from "./pages/CommandDashboard.tsx";
import CommandReportDetail from "./pages/CommandReportDetail.tsx";
import CommandLocationDetail from "./pages/CommandLocationDetail.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app/login" element={<CitizenLogin />} />
          <Route path="/app" element={<CitizenApp />} />
          <Route path="/command/login" element={<CommandLogin />} />
          <Route path="/command" element={<CommandDashboard />} />
          <Route path="/command/report/:id" element={<CommandReportDetail />} />
          <Route path="/command/location/:key" element={<CommandLocationDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
