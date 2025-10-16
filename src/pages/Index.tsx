"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Welcome to Your Interactive Platform
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          This is your central hub for learning, collaboration, and data management.
          Explore the features designed to make your experience intuitive and educational.
        </p>

        {user ? (
          <div className="space-y-4">
            <p className="text-lg">
              Hello, <span className="font-semibold text-primary">{user.email}</span>!
              You are logged in.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Here you can access your personalized content and collaborate with others.
            </p>
            <Button onClick={logout} className="mt-4">
              Logout
            </Button>
          </div>
        ) : (
          <div className="space-x-4 mt-8">
            <Link to="/login">
              <Button size="lg">Login</Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline">Register</Button>
            </Link>
          </div>
        )}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;