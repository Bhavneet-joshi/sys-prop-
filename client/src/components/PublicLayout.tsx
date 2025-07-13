import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/policy", label: "Policy" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <a
        className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover-nav ${
          location === href ? "text-navyblue" : "text-gray-700"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </a>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="ml-3 text-xl font-bold text-navyblue">HLSG Industries</span>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-navyblue text-navyblue hover:bg-navyblue hover:text-white"
                onClick={() => window.location.href = "/api/login"}
              >
                Login
              </Button>
              <Link href="/register">
                <Button className="btn-golden text-white">
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} label={item.label} />
                  ))}
                  <div className="pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full mb-2 border-navyblue text-navyblue hover:bg-navyblue hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = "/api/login";
                      }}
                    >
                      Login
                    </Button>
                    <Link href="/register">
                      <Button className="w-full btn-golden text-white" onClick={() => setIsMenuOpen(false)}>
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-navyblue to-goldenrod1 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="ml-3 text-xl font-bold">HLSG Industries</span>
              </div>
              <p className="text-gray-300 mb-6">
                Building the future through innovative solutions and strategic partnerships.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-golden transition-colors duration-200">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors duration-200">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors duration-200">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Business Strategy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Technology Solutions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Contract Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Risk Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Consulting</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about"><a className="text-gray-300 hover:text-golden transition-colors duration-200">About Us</a></Link></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">About Founders</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">News</a></li>
                <li><Link href="/contact"><a className="text-gray-300 hover:text-golden transition-colors duration-200">Contact</a></Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/policy"><a className="text-gray-300 hover:text-golden transition-colors duration-200">Privacy Policy</a></Link></li>
                <li><Link href="/policy"><a className="text-gray-300 hover:text-golden transition-colors duration-200">Data Protection</a></Link></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-golden transition-colors duration-200">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 HLSG Industries. All rights reserved. | Designed with excellence for the future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
