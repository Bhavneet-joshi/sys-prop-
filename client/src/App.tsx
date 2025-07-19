import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Founders from "@/pages/about/Founders";
import Company from "@/pages/about/Company";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/services/ServiceDetail";
import Contact from "@/pages/Contact";
import Policy from "@/pages/Policy";
import Register from "@/pages/Register";
import Login from '@/pages/Login';

// Client pages
import ClientDashboard from "@/pages/client/Dashboard";
import ClientProfile from "@/pages/client/Profile";
import ClientContracts from "@/pages/client/Contracts";
import ClientContractView from "@/pages/client/ContractView";

// Employee pages
import EmployeeDashboard from "@/pages/employee/Dashboard";
import EmployeeProfile from "@/pages/employee/Profile";
import EmployeeContracts from "@/pages/employee/Contracts";
import EmployeeContractSpecific from "@/pages/employee/ContractSpecific";

// Admin pages
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminProfile from "@/pages/admin/Profile";
import AdminContracts from "@/pages/admin/Contracts";
import AdminContractSpecific from "@/pages/admin/ContractSpecific";
import AdminNewContract from "@/pages/admin/NewContract";
import AdminUserManagement from "@/pages/admin/UserManagement";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function Router() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-navyblue"></div>
      </div>
    );
  }

  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/founders" component={Founders} />
      <Route path="/about/company" component={Company} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/policy" component={Policy} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      
      {!isAuthenticated ? (
        <>
          <Route path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/policy" component={Policy} />
          <Route path="/register" component={Register} />
        </>
      ) : (
        <>
          <Route path="/dashboard" component={Home} />
          
          {/* Client routes */}
          {user?.role === 'client' && (
            <>
              <Route path="/dashboard" component={ClientDashboard} />
              <Route path="/profile" component={ClientProfile} />
              <Route path="/contracts" component={ClientContracts} />
              <Route path="/contracts/:id" component={ClientContractView} />
            </>
          )}
          
          {/* Employee routes */}
          {user?.role === 'employee' && (
            <>
              <Route path="/dashboard" component={EmployeeDashboard} />
              <Route path="/profile" component={EmployeeProfile} />
              <Route path="/contracts" component={EmployeeContracts} />
              <Route path="/contracts/:id" component={EmployeeContractSpecific} />
            </>
          )}
          
          {/* Admin routes */}
          {user?.role === 'admin' && (
            <>
              <Route path="/dashboard" component={AdminDashboard} />
              <Route path="/profile" component={AdminProfile} />
              <Route path="/contracts" component={AdminContracts} />
              <Route path="/contracts/:id" component={AdminContractSpecific} />
              <Route path="/contracts/new" component={AdminNewContract} />
              <Route path="/users" component={AdminUserManagement} />
            </>
          )}
        </>
      )}
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <NavigationBar />
        <div className="pt-16 min-h-screen flex flex-col">
          <Toaster />
          <Router />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
