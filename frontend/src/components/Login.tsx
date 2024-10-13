import React from "react";
// import Link from "next/link";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import { ArrowRight, Lock } from "lucide-react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <Lock className="h-12 w-12 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Login to AuditSafe
          </h2>
          <form className="space-y-6">
            <div>
              <InputLabel htmlFor="email" sx={{ color: "white" }}>
                Email
              </InputLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                fullWidth // Ensures the input takes the full width
                sx={{
                  mt: 1,
                  bgcolor: "#1F2937", // Change the background color of the input
                  borderColor: "#374151", // Change the border color
                  color: "white", // Change the text color
                  height: "56px", // Increase the height
                  "& .MuiInputBase-input": {
                    height: "56px", // Set input text height
                  },
                  "&:hover": {
                    bgcolor: "#2a2e34", // Change background color on hover
                  },
                }}
              />
            </div>
            <div>
              <InputLabel htmlFor="password" sx={{ color: "white" }}>
                Password
              </InputLabel>
              <Input
                id="password"
                type="password"
                required
                fullWidth // Ensures the input takes the full width
                sx={{
                  mt: 1,
                  bgcolor: "#1F2937", // Change the background color of the input
                  borderColor: "#374151", // Change the border color
                  color: "white", // Change the text color
                  height: "56px", // Increase the height
                  "& .MuiInputBase-input": {
                    height: "56px", // Set input text height
                  },
                  "&:hover": {
                    bgcolor: "#2a2e34", // Change background color on hover
                  },
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign in <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
