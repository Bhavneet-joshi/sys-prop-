import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import ProtectedLayout from "@/components/ProtectedLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-navyblue"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "employee":
        return "bg-blue-100 text-blue-800";
      case "client":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-navyblue mb-2">
                  Welcome back, {user?.firstName || "User"}!
                </h1>
                <p className="text-gray-600">
                  Here's what's happening in your workspace today.
                </p>
              </div>
              <Badge className={`${getRoleColor(user?.role || "")} text-sm px-3 py-1`}>
                {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="card-hover transition-all duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  View your personalized dashboard with key metrics and recent activity.
                </p>
                <Link href="/dashboard">
                  <Button className="w-full btn-primary text-white">
                    Go to Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover transition-all duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {user?.role === "client" 
                    ? "View and manage your contracts with detailed PDF viewing."
                    : "Access assigned contracts and collaborate with team members."
                  }
                </p>
                <Link href="/contracts">
                  <Button className="w-full btn-primary text-white">
                    View Contracts
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover transition-all duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Update your profile information, contact details, and preferences.
                </p>
                <Link href="/profile">
                  <Button className="w-full btn-primary text-white">
                    Edit Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Role-specific Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-navyblue">Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user?.role === "client" && (
                    <>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-goldenrod1 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">View Your Contracts</p>
                          <p className="text-sm text-gray-600">Access all your agreements and add comments directly to contract lines.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-goldenrod1 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Request New Contract</p>
                          <p className="text-sm text-gray-600">Contact our team to initiate a new contract or service agreement.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {user?.role === "employee" && (
                    <>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-goldenrod1 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Review Assigned Contracts</p>
                          <p className="text-sm text-gray-600">Check contracts assigned to you and respond to client comments.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-goldenrod1 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Collaborate on Projects</p>
                          <p className="text-sm text-gray-600">Work with team members and clients on contract management.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {user?.role === "admin" && (
                    <>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-goldenrod1 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Manage Users</p>
                          <p className="text-sm text-gray-600">Add new users, update roles, and manage access permissions.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-goldenrod1 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Create New Contracts</p>
                          <p className="text-sm text-gray-600">Generate new contracts and assign them to employees and clients.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-navyblue">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Profile Updated</p>
                      <p className="text-sm text-gray-600">Your profile information was successfully updated.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">System Access</p>
                      <p className="text-sm text-gray-600">You have been granted access to the HLSG Industries portal.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
