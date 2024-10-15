import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import Badge from "./ui/badge";
import {
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
import CoolLoader from "./Loader";

// Step 1: Define UserData interface
interface UserData {
  firstName: string;
  lastName: string;
  profession: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
  company: string;
  position: string;
  bio: string;
  recentAudits?: {
    // Optional
    id: string;
    name: string;
    date: string;
  }[];
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const authToken = localStorage.getItem("authToken");
  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://audit-safe.onrender.com/api/get-profiles",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: authToken, email }), // Use 'token'
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Update state with fetched data
        } else {
          console.error("Failed to fetch user data, status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (authToken) {
      // Only fetch if authToken is available
      fetchUserData();
    }
  }, [authToken]);

  if (!userData) {
    return <CoolLoader />; // Loading state
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <Link to="/home/dashboard">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </Link>
        <Link to="/coming-soon">
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src="/placeholder-avatar.jpg" // Update to match your logic for avatar
                  alt={`${userData.firstName} ${userData.lastName}`}
                />
                <AvatarFallback
                  fallback={`${userData.firstName.charAt(
                    0
                  )}${userData.lastName.charAt(0)}`}
                />
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">
                  {userData.firstName} {userData.lastName}
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                  {userData.profession}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {/* Map over certifications if present */}
                  {/* {userData.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-400">
                      {cert}
                    </Badge>
                  ))} */}
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
                <span>{email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-gray-400" />
                <span>{userData.phoneNumber}</span> {/* Updated from phone */}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                <span>
                  {userData.address}, {userData.city}, {userData.country}
                </span>{" "}
                {/* Updated to combine address, city, and country */}
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
                <span>
                  Joined on {/* Add logic for join date if available */}
                </span>
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
              {userData.recentAudits?.map((audit) => (
                <li
                  key={audit.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-200">{audit.name}</span>
                  <span className="text-sm text-gray-400">{audit.date}</span>
                </li>
              )) || <li>No recent audits found.</li>}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-gray-100">
              {userData.firstName} {userData.lastName}'s Bio
            </CardTitle>
            <CardDescription className="text-gray-300">
              Your bio{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>{userData.bio}</CardContent>
        </Card>
        {/* Security Section */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-100">Security</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="my-2">
              <Link to="/coming-soon">
                <Button variant="outline" className="justify-start text-left">
                  <Shield className="mr-2 h-4 w-4" /> Change Password
                </Button>
              </Link>
            </div>
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
