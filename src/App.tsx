
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MarketAnalysis from "./pages/MarketAnalysis";
import StrategyConfiguration from "./pages/StrategyConfiguration";
import RiskManagement from "./pages/RiskManagement";
import BotSettings from "./pages/BotSettings";
import BotManagement from "./pages/BotManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <SidebarNav />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/market-analysis" element={<MarketAnalysis />} />
                <Route path="/strategy" element={<StrategyConfiguration />} />
                <Route path="/risk" element={<RiskManagement />} />
                <Route path="/bot-settings" element={<BotSettings />} />
                <Route path="/bot-management" element={<BotManagement />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
