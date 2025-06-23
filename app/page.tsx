"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Sun,
  Moon,
  TrendingUp,
  Calendar,
  Target,
  BarChart3,
  MessageCircle,
  Settings,
  CheckCircle,
  Mail,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Music,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-b from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Creator Cartel Logo"
                    width={60}
                    height={55}
                  />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                >
                  Features
                </a>
              </nav>

              {/* Desktop CTA & Theme Toggle */}
              <div className="hidden md:flex items-center space-x-4">
                <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 h-dvh border-t border-gray-200 dark:border-gray-700">
                <nav className="flex flex-col space-y-4">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  >
                    Features
                  </a>
                  <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 w-full mt-4">
                    Get Started
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-pink-200 text-pink-800 hover:bg-pink-300 px-4 py-2 text-sm font-medium">
                All-In-One Creator Workspace
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                STRENGTH IN{" "}
                <span className="text-amber-600 dark:text-amber-400">
                  CREATIVITY
                </span>
                ,<br />
                <span className="text-amber-600 dark:text-amber-400">
                  POWER
                </span>{" "}
                IN NUMBERS.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover vital content insights, coordinate team schedules, and
                streamline workflows with tools designed specifically for
                content creators and their teams
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  Join Open Beta Waitlist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg"
                >
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Trending Now Card */}
                <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Trending Now
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          24
                        </span>
                        <div className="text-right">
                          <div className="text-sm text-green-600 font-medium">
                            +180%
                          </div>
                          <div className="text-xs text-gray-500">
                            vs last week
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          3.2M
                        </div>
                        <div className="text-xs text-gray-500">TOTAL VIEWS</div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        {
                          name: "Future Challenge Content",
                          color: "bg-purple-500",
                        },
                        {
                          name: "Aesthetic Lifestyle Posts",
                          color: "bg-purple-400",
                        },
                        {
                          name: "Creative Process Videos",
                          color: "bg-purple-600",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded ${item.color}`}
                          ></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                            {item.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-red-100 text-red-700 text-xs"
                          >
                            HOT
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-1 mt-4">
                      {[
                        "bg-blue-500",
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-red-500",
                      ].map((color, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full ${color} border-2 border-white`}
                        ></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Creator Calendar Card */}
                <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Creator Calendar
                      </h3>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                        <div
                          key={index}
                          className="text-center text-xs text-gray-500 p-1"
                        >
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 5;
                        const isCurrentMonth = day > 0 && day <= 31;
                        const hasEvent =
                          isCurrentMonth && [3, 8, 15, 22, 28].includes(day);
                        return (
                          <div
                            key={i}
                            className={`aspect-square text-xs flex items-center justify-center rounded ${
                              isCurrentMonth
                                ? hasEvent
                                  ? "bg-cyan-500 text-white"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          >
                            {isCurrentMonth ? day : ""}
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs text-gray-500">
                        Content review with team
                      </div>
                      <div className="text-xs text-gray-500">
                        Q4 campaign collaboration
                      </div>
                      <div className="text-xs text-gray-500">
                        Live stream collaboration
                      </div>
                    </div>

                    <div className="flex gap-1 mt-4">
                      {["bg-cyan-500", "bg-blue-500", "bg-teal-500"].map(
                        (color, index) => (
                          <div
                            key={index}
                            className={`w-6 h-6 rounded-full ${color} border-2 border-white`}
                          ></div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Potential Reach Card */}
                <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-red-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Potential Reach
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          2.4M
                        </div>
                        <div className="text-xs text-gray-500">EST REACH</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          156K
                        </div>
                        <div className="text-xs text-gray-500 mb-1">
                          ENGAGEMENT
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          8.2%
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          name: "Viral Content Analytics",
                          color: "bg-purple-500",
                        },
                        { name: "Content Inspiration", color: "bg-purple-400" },
                        {
                          name: "Performance Insights",
                          color: "bg-purple-600",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded ${item.color}`}
                          ></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                            {item.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-red-100 text-red-700 text-xs"
                          >
                            NEW
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-1 mt-4">
                      {["bg-red-500", "bg-orange-500", "bg-yellow-500"].map(
                        (color, index) => (
                          <div
                            key={index}
                            className={`w-6 h-6 rounded-full ${color} border-2 border-white`}
                          ></div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                WHAT YOU&apos;LL GET AS A BETA USER
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Access data-driven content insights, intuitive collaboration
                tools, and industry-tailored workflows—all designed to help you
                create smarter, coordinate faster, and scale your impact with
                confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Smart Content Discovery */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Card className="w-full bg-gray-50 dark:bg-gray-700 border-0 p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Viral Content Monitor
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-red-500 font-bold">2.4M</div>
                          <div className="text-xs text-gray-500">
                            VIRAL POSTS
                          </div>
                        </div>
                        <div>
                          <div className="text-red-500 font-bold">94%</div>
                          <div className="text-xs text-gray-500">
                            SUCCESS RATE
                          </div>
                        </div>
                        <div>
                          <div className="text-red-500 font-bold">12K</div>
                          <div className="text-xs text-gray-500">CREATORS</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">
                            Tik Tok - 998K views
                          </span>
                          <span className="text-gray-500">
                            Instagram - 436K views
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Smart Content Discovery
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Get insights into viral content performance and trending
                        topics.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Organize inspiration into collections for different
                        creators and campaigns.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Coordination */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Card className="w-full bg-gray-50 dark:bg-gray-700 border-0 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-4 h-4" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Team Chat
                        </h4>
                        <div className="ml-auto">•••</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            New viral trend spotted!
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Creator collaboration ready
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Content ready for review
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          Content scheduled for 3:00 PM today
                        </div>
                      </div>
                    </Card>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Team Coordination Made Simple
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Streamline communication between creators and account
                        managers.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Coordinate content schedules with intelligent planning
                        tools.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Industry-Focused Features */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Card className="w-full bg-gray-50 dark:bg-gray-700 border-0 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 className="w-4 h-4" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Creator Dashboard
                        </h4>
                        <div className="ml-auto text-green-500 text-xs">
                          ● Online
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-gray-900 dark:text-white font-bold">
                            24
                          </div>
                          <div className="text-xs text-gray-500">
                            ACTIVE CAMPAIGNS
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-900 dark:text-white font-bold">
                            98%
                          </div>
                          <div className="text-xs text-gray-500">
                            COMPLETION RATE
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Content approval workflow
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Automated scheduling
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Industry-Focused Features
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Built specifically for content creator workflows and
                        team dynamics.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Secure, compliant, and designed for professional creator
                        businesses.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center items-center gap-4 mb-8">
                <Settings className="w-12 h-12 text-orange-400 animate-spin-slow" />
                <Mail className="w-10 h-10 text-blue-400" />
                <BarChart3 className="w-10 h-10 text-green-400" />
                <Calendar className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">
              COMING SOON!!!
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join The Creator Movement
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get early access to the tools that will redefine how you discover,
              plan, and collaborate as a content creator or creator team.
            </p>

            <form
              onSubmit={handleEmailSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            >
              <Input
                type="email"
                placeholder="johnDoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                required
              />
              <Button
                type="submit"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8"
              >
                Join Waitlist
              </Button>
            </form>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Strength In Creativity, Power In Numbers
            </p>

            {/* Floating 3D Box Illustration */}
            <div className="mt-12 relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-900 rounded-lg transform rotate-12 opacity-60"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-pink-200 to-pink-300 dark:from-pink-800 dark:to-pink-900 rounded-lg transform -rotate-6 opacity-80"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-yellow-200 to-yellow-300 dark:from-yellow-800 dark:to-yellow-900 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-sm text-gray-400">creator cartel</div>
                <div className="text-xs text-gray-500">
                  POWERED BY CREATORS, BUILT FOR CREATORS
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-xs text-gray-500">
                © 2025 Creator Cartel. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
