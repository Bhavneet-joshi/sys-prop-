import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PublicLayout from "@/components/PublicLayout";
import { Users, Award, Globe, Target, Heart, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-navyblue mb-6">About HLSG Industries</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building the future through innovation, dedication, and strategic partnerships since our founding.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navyblue mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded with a vision to transform businesses through innovative solutions, HLSG Industries emerged from a simple belief: that technology and strategic thinking can solve the most complex business challenges.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our journey began when our founders recognized the growing need for comprehensive business solutions that bridge the gap between traditional practices and modern innovation.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Today, we stand as a testament to what's possible when vision meets execution, serving clients across industries with cutting-edge solutions and unwavering commitment to excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="px-6 py-3 text-white btn-primary rounded-lg">
                    About Our Founders
                  </Button>
                  <Button variant="outline" className="px-6 py-3 text-navyblue border-navyblue hover:bg-navyblue hover:text-white">
                    Company Timeline
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="HLSG Industries office" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navyblue mb-6">Our Foundation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at HLSG Industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover transition-all duration-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navyblue">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To empower businesses with innovative solutions that drive growth, efficiency, and sustainable success in an ever-evolving marketplace.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover transition-all duration-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navyblue">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To be the global leader in business transformation, setting the standard for innovation, quality, and client satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover transition-all duration-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navyblue">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Integrity, innovation, excellence, and collaboration form the cornerstone of our approach to every client relationship and project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navyblue mb-6">Our Impact</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-navyblue mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navyblue mb-2">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navyblue mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navyblue mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navyblue mb-6">Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionaries who drive our mission forward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover transition-all duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navyblue">Executive Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Our executive leadership brings decades of combined experience in technology, business strategy, and innovation.
                  </p>
                  <Button variant="outline" className="w-full text-navyblue border-navyblue hover:bg-navyblue hover:text-white">
                    Meet the Team
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover transition-all duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navyblue">Advisory Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Industry experts and thought leaders who guide our strategic direction and ensure we stay ahead of market trends.
                  </p>
                  <Button variant="outline" className="w-full text-navyblue border-navyblue hover:bg-navyblue hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover transition-all duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navyblue">Innovation Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Creative minds and technical experts who drive our research and development initiatives.
                  </p>
                  <Button variant="outline" className="w-full text-navyblue border-navyblue hover:bg-navyblue hover:text-white">
                    View Projects
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Logo Animation Section */}
        <section className="py-16 bg-navyblue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Brand Story</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Every element of our logo represents a core aspect of who we are and what we stand for.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-goldenrod1 to-goldenrod2 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-4xl">H</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <h3 className="text-xl font-bold mb-4">Heritage</h3>
                <p className="text-gray-200">
                  The 'H' represents our heritage and the human element that drives everything we do.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-200">
                  The gradient symbolizes our forward-thinking approach and continuous evolution.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-200">
                  The golden accent reflects our commitment to premium quality and exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
