import React, { useState } from "react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { ArrowRight, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // For redirection

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // To redirect after successful registration

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message || "Registration failed");
        setLoading(false);
        return;
      }

      // Optionally handle successful registration (e.g., redirect to login)
      navigate("/login"); // Redirect on successful registration
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        {/* Decreased overall size of the container */}
        <div className="w-full max-w-sm p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg my-12 max-h-[90vh] overflow-auto">
          <div className="flex justify-center mb-6">
            <UserPlus className="h-12 w-12 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Create an Account
          </h2>
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <InputLabel htmlFor="name" sx={{ color: "white" }}>
                Full Name
              </InputLabel>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                sx={{
                  mt: 1,
                  bgcolor: "#1F2937",
                  borderColor: "#374151",
                  color: "white",
                  height: "48px", // Decreased height for inputs
                  "& .MuiInputBase-input": {
                    height: "48px", // Set input text height
                  },
                  "&:hover": {
                    bgcolor: "#2a2e34",
                  },
                }}
              />
            </div>
            <div>
              <InputLabel htmlFor="email" sx={{ color: "white" }}>
                Email
              </InputLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                fullWidth
                sx={{
                  mt: 1,
                  bgcolor: "#1F2937",
                  borderColor: "#374151",
                  color: "white",
                  height: "48px", // Decreased height for inputs
                  "& .MuiInputBase-input": {
                    height: "48px", // Set input text height
                  },
                  "&:hover": {
                    bgcolor: "#2a2e34",
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                sx={{
                  mt: 1,
                  bgcolor: "#1F2937",
                  borderColor: "#374151",
                  color: "white",
                  height: "48px", // Decreased height for inputs
                  "& .MuiInputBase-input": {
                    height: "48px", // Set input text height
                  },
                  "&:hover": {
                    bgcolor: "#2a2e34",
                  },
                }}
              />
            </div>
            <div>
              <InputLabel htmlFor="confirmPassword" sx={{ color: "white" }}>
                Confirm Password
              </InputLabel>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                sx={{
                  mt: 1,
                  bgcolor: "#1F2937",
                  borderColor: "#374151",
                  color: "white",
                  height: "48px", // Decreased height for inputs
                  "& .MuiInputBase-input": {
                    height: "48px", // Set input text height
                  },
                  "&:hover": {
                    bgcolor: "#2a2e34",
                  },
                }}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
