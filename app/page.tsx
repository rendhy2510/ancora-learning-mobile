"use client";

import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

// Import Role Dashboards
import UserDashboard from "@/components/dashboards/user/UserDashboard";
import LeaderDashboard from "@/components/dashboards/leader/LeaderDashboard";
import HcDashboard from "@/components/dashboards/hc/HcDashboard";
import BodDashboard from "@/components/dashboards/bod/BodDashboard";

export type Role = "User" | "Leader" | "HC" | "BOD";

export default function Home() {
  const [userRole, setUserRole] = useState<Role>("HC");

  React.useEffect(() => {
    // 1. Get initial role
    let initialRole = "HC" as Role;
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get("role") as Role;
      const savedRole = localStorage.getItem("demo-role") as Role;

      if (roleParam && ["User", "HC", "Leader", "BOD"].includes(roleParam)) {
        initialRole = roleParam;
      } else if (
        savedRole &&
        ["User", "HC", "Leader", "BOD"].includes(savedRole)
      ) {
        initialRole = savedRole;
      }
    }
    setUserRole(initialRole);

    const handleRoleChange = (e: any) => {
      const newRole = e.detail as Role;
      if (newRole && ["User", "HC", "Leader", "BOD"].includes(newRole)) {
        setUserRole(newRole);
      }
    };

    window.addEventListener("role-changed", handleRoleChange);
    return () => window.removeEventListener("role-changed", handleRoleChange);
  }, []);

  // Dispatcher function that returns the correct component based on role
  const renderDashboardContent = () => {
    switch (userRole) {
      case "Leader":
        return <LeaderDashboard />;
      case "HC":
        return <HcDashboard />;
      case "BOD":
        return <BodDashboard />;
      case "User":
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      {/* We can pass userRole to Sidebar later when we implement RBAC for the menu */}
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Ralph Edwards"
          userEmail="edwards@gmail.com"
          userAvatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          {/* Main Dashboard Container */}
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
            {/* The individual components have their own white background cards */}
            {renderDashboardContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
