import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Avatar } from "./ui/avatar"; // If Avatar is the default export
import { AvatarFallback, AvatarImage } from "./ui/avatar"; // Then import the others
import Badge from "./ui/badge";
import {
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  Calendar,
  MapPin,
  Shield,
  Edit,
  ArrowLeft,
} from "lucide-react";

// Sample user data
const userData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 (555) 123-4567",
  company: "AuditCorp Inc.",
  position: "Senior Auditor",
  joinDate: "January 15, 2020",
  location: "New York, NY",
  certifications: ["CPA", "CIA", "CISA"],
  recentAudits: [
    { id: 1, name: "Financial Audit Q2 2023", date: "June 30, 2023" },
    { id: 2, name: "Compliance Review", date: "May 15, 2023" },
    { id: 3, name: "Risk Assessment", date: "April 2, 2023" },
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <Link to="/home/dashboard">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </Link>

        <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
          <Edit className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src="/placeholder-avatar.jpg"
                  alt={userData.name}
                />
                <AvatarFallback
                  fallback={userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                />
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                <p className="text-xl text-gray-300 mb-4">
                  {userData.position} at {userData.company}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {userData.certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-400"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-gray-400" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-gray-400" />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                <span>{userData.location}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Professional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Building className="mr-2 h-4 w-4 text-gray-400" />
                <span>{userData.company}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-gray-400" />
                <span>{userData.position}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                <span>Joined on {userData.joinDate}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Audits */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Audits</CardTitle>
            <CardDescription className="text-gray-300">
              Last 3 audits conducted
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {userData.recentAudits.map((audit) => (
                <li
                  key={audit.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-200">{audit.name}</span>
                  <span className="text-sm text-gray-400">{audit.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Security Section */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-100">Security</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full justify-start text-left"
            >
              <Shield className="mr-2 h-4 w-4" /> Change Password
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-300 text-sm">
        <p>
          &copy; 2024 AuditSafe. All rights reserved. |{" "}
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-blue-400">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
}
