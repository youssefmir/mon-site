import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/pages/ServicesPage";
import EventsPage from "@/pages/EventsPage";
import ContactPage from "@/pages/ContactPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Annuaire from "@/pages/Annuaire";
import WaitingValidation from "@/pages/WaitingValidation";
import AdminDashboard from "@/pages/AdminDashboard";
import MembersDirectory from "@/pages/services/MembersDirectory";
import TrainingResources from "@/pages/services/TrainingResources";
import NetworkingEvents from "@/pages/services/NetworkingEvents";
import SupportAssistance from "@/pages/services/SupportAssistance";
import CareerOpportunities from "@/pages/services/CareerOpportunities";
import CertificationsCompetences from "@/pages/services/CertificationsCompetences";
import ProtectedRoute from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/attente-validation" element={<WaitingValidation />} />
            <Route path="/services/annuaire" element={<MembersDirectory />} />
            <Route path="/services/ressources" element={<TrainingResources />} />
            <Route path="/services/evenements-networking" element={<NetworkingEvents />} />
            <Route path="/services/support" element={<SupportAssistance />} />
            <Route path="/services/opportunites" element={<CareerOpportunities />} />
            <Route path="/services/certifications" element={<CertificationsCompetences />} />
            <Route
              path="/annuaire"
              element={
                <ProtectedRoute>
                  <Annuaire />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
