import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicLayout from "@/components/PublicLayout";
import { Download, Shield, Eye, Database, Lock } from "lucide-react";

export default function Policy() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-navyblue mb-6">Privacy Policy & Data Protection</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy and data security are our top priorities. Learn how we protect and manage your information.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                <TabsTrigger value="data-protection">Data Protection</TabsTrigger>
              </TabsList>
              
              <TabsContent value="privacy" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Eye className="mr-2 h-5 w-5" />
                      Information We Collect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-navyblue mb-2">Personal Information</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Name, email address, and contact information</li>
                        <li>Professional details including company and job title</li>
                        <li>Account credentials and authentication data</li>
                        <li>Communication preferences and history</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-navyblue mb-2">Usage Information</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Device information and browser type</li>
                        <li>IP address and location data</li>
                        <li>Website navigation and interaction patterns</li>
                        <li>Service usage statistics and preferences</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Database className="mr-2 h-5 w-5" />
                      How We Use Your Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-navyblue mb-2">Service Delivery</h3>
                      <p className="text-gray-600 mb-2">We use your information to:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Provide and maintain our services</li>
                        <li>Process transactions and manage accounts</li>
                        <li>Communicate about services and updates</li>
                        <li>Provide customer support and assistance</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-navyblue mb-2">Improvement and Analytics</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Analyze usage patterns to improve services</li>
                        <li>Develop new features and functionality</li>
                        <li>Conduct research and statistical analysis</li>
                        <li>Ensure security and prevent fraud</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Shield className="mr-2 h-5 w-5" />
                      Information Sharing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>With service providers who assist in our operations</li>
                      <li>When required by law or legal process</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>In connection with business transfers or mergers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Lock className="mr-2 h-5 w-5" />
                      Your Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate data</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Data portability and transfer rights</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="data-protection" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Shield className="mr-2 h-5 w-5" />
                      Data Security Measures
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-navyblue mb-2">Technical Safeguards</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Advanced firewall and intrusion detection systems</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>Secure data centers with physical access controls</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-navyblue mb-2">Administrative Controls</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Role-based access control and authentication</li>
                        <li>Employee training on data protection practices</li>
                        <li>Regular security policy reviews and updates</li>
                        <li>Incident response and breach notification procedures</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Database className="mr-2 h-5 w-5" />
                      Data Retention
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Account information: Duration of active account plus 3 years</li>
                      <li>Transaction records: 7 years for compliance purposes</li>
                      <li>Communication logs: 2 years for service improvement</li>
                      <li>Usage analytics: Aggregated data retained indefinitely</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Eye className="mr-2 h-5 w-5" />
                      Compliance Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      Our data protection practices comply with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">International Standards</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>GDPR (General Data Protection Regulation)</li>
                          <li>ISO 27001 Information Security Management</li>
                          <li>SOC 2 Type II Compliance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Regional Regulations</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>India's Personal Data Protection Act</li>
                          <li>CCPA (California Consumer Privacy Act)</li>
                          <li>Industry-specific compliance requirements</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-navyblue">
                      <Lock className="mr-2 h-5 w-5" />
                      Data Breach Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      In the event of a data breach, we will:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Notify affected users within 72 hours</li>
                      <li>Provide detailed information about the breach</li>
                      <li>Implement immediate containment measures</li>
                      <li>Cooperate with regulatory authorities</li>
                      <li>Offer credit monitoring services if applicable</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navyblue mb-6">Download Policy Documents</h2>
            <p className="text-xl text-gray-600 mb-8">
              Access our complete policy documents for your records and reference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-4 text-white btn-primary rounded-lg shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Privacy Policy PDF
              </Button>
              <Button className="px-8 py-4 text-white btn-golden rounded-lg shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Data Protection PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navyblue mb-6">Questions About Our Policies?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our privacy and data protection team is here to help address any concerns you may have.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navyblue mb-2">Data Protection Officer</h3>
                  <p className="text-gray-600 mb-4">privacy@hlsgindustries.com</p>
                  <p className="text-sm text-gray-500">
                    For questions about data processing, privacy rights, and policy clarifications.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navyblue mb-2">Legal Team</h3>
                  <p className="text-gray-600 mb-4">legal@hlsgindustries.com</p>
                  <p className="text-sm text-gray-500">
                    For legal inquiries, compliance questions, and regulatory matters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
