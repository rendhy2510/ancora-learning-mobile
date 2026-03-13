"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Skeleton, Card, Button, Switch, Tab, Tabs } from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const menuList = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  {
    id: "employee-training",
    label: "Employee Training",
    icon: "fluent_people-team-16-filled",
  },
  { id: "attendance", label: "Attendance", icon: "tabler_list-check" },
  { id: "trainer", label: "Trainer", icon: "ph_chalkboard-teacher-fill" },
  {
    id: "training-content",
    label: "Training Content",
    icon: "courses_enrolled",
  },
  {
    id: "knowledge-assessment-leader",
    label: "Knowledge Assessment Leader",
    icon: "knowledge_assessment",
  },
  {
    id: "assessment-evaluation",
    label: "Assessment & Evaluation",
    icon: "basil_document-solid",
  },
  { id: "team-progress", label: "Team Progress", icon: "learning_progress" },
  {
    id: "learning-progress",
    label: "Learning Progress",
    icon: "learning_progress",
  },
  {
    id: "knowledge-assessment",
    label: "Knowledge Assessment",
    icon: "knowledge_assessment",
  },
  {
    id: "behavior-monitoring",
    label: "Behavior Monitoring",
    icon: "clipboard-check",
  },
  {
    id: "assigned-courses",
    label: "Assigned Courses",
    icon: "assigned_courses",
  },
  { id: "learning-path", label: "Learning Path", icon: "learning_path" },
  {
    id: "certification-record",
    label: "Certification Record",
    icon: "certification_record",
  },
  { id: "social-learning", label: "Social Learning", icon: "social_learning" },
  {
    id: "knowledge-bank",
    label: "Knowledge Bank",
    icon: "mdi_book-education_nonactive",
  },
  {
    id: "reports-analytics",
    label: "Reports & Analytics",
    icon: "mage_chart-fill",
  },
  {
    id: "report-analytics-hc",
    label: "Report & Analytics HC",
    icon: "mage_chart-fill",
  },
  { id: "rbac", label: "RBAC", icon: "solar_shield-keyhole-bold" },
  { id: "users", label: "Users", icon: "solar_user-bold" },
  { id: "notifications", label: "Notifications", icon: "notification_menu" },
  { id: "settings", label: "Settings", icon: "settings_menu" },
];

const roles = ["User", "HC", "Leader", "BOD"];

const RBACSkeleton = () => (
  <div className="space-y-6">
    <div className="h-16 w-full rounded-2xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border p-4 flex items-center justify-center">
      <Skeleton className="h-10 w-[400px] rounded-xl" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, i) => (
        <Card
          key={i}
          className="p-6 border-none shadow-sm bg-white dark:bg-dark-surface h-32"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Skeleton className="w-10 h-10 rounded-xl" />
              <Skeleton className="h-4 w-32 rounded-lg" />
            </div>
            <Skeleton className="h-6 w-10 rounded-full" />
          </div>
          <Skeleton className="h-3 w-24 rounded-lg" />
        </Card>
      ))}
    </div>
  </div>
);

export default function RBACPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState("User");
  const [permissions, setPermissions] = useState<
    Record<string, Record<string, boolean>>
  >({
    User: {
      dashboard: true,
      "learning-progress": true,
      "assigned-courses": true,
      "learning-path": true,
      "knowledge-assessment": true,
      "certification-record": true,
      "social-learning": true,
      "knowledge-bank": true,
      notifications: true,
      settings: true,
    },
    HC: {
      dashboard: true,
      "employee-training": true,
      attendance: true,
      trainer: true,
      "training-content": true,
      "assessment-evaluation": true,
      "reports-analytics-hc": true,
      "certification-record": true,
      notifications: true,
      "social-learning": true,
      settings: true,
      users: true,
      rbac: true,
    },
    Leader: {
      dashboard: true,
      "team-progress": true,
      "knowledge-assessment": true,
      "behavior-monitoring": true,
      "learning-path": true,
      "social-learning": true,
      "knowledge-bank": true,
      "reports-analytics": true,
      settings: true,
    },
    BOD: menuList.reduce((acc, menu) => ({ ...acc, [menu.id]: true }), {}),
  });

  const handleSave = () => {
    // Save to localStorage for demo persistence
    localStorage.setItem("demo-role", selectedRole);
    // Notify Header and Sidebar
    window.dispatchEvent(
      new CustomEvent("role-changed", { detail: selectedRole }),
    );

    // Visual feedback
    const originalText = "Save Changes";
    const btn = document.querySelector("#save-rbac-btn") as HTMLButtonElement;
    if (btn) {
      btn.innerHTML = "Changes Applied!";
      btn.style.backgroundColor = "#0F8C66";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = "#2848A5";
      }, 2000);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const togglePermission = (menuId: string) => {
    setPermissions((prev) => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [menuId]: !prev[selectedRole]?.[menuId],
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Ronald Richards"
          userEmail="ronald@gmail.com"
          userAvatar="https://i.pravatar.cc/150?u=ronald"
          pageTitle="Role Based Access Control"
          pageSubtitle="Assign menu visibility and permissions per role"
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Skeleton className="h-full w-full rounded-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {/* Role Selector Tabs */}
                  <motion.div variants={itemVariants} className="flex flex-col">
                    <p className="text-[14px] font-medium text-gray-400 mb-3 ml-1 uppercase tracking-wider">
                      Selected Identity
                    </p>
                    <Tabs
                      aria-label="Roles"
                      color="primary"
                      variant="light"
                      selectedKey={selectedRole}
                      onSelectionChange={(key) =>
                        setSelectedRole(key as string)
                      }
                      classNames={{
                        tabList:
                          "bg-gray-50 dark:bg-dark-navy p-1 rounded-2xl border border-gray-100 dark:border-dark-border",
                        cursor:
                          "bg-white dark:bg-dark-surface shadow-sm rounded-xl",
                        tab: "h-12 px-8",
                        tabContent:
                          "group-data-[selected=true]:text-[#2848A5] font-bold text-[15px]",
                      }}
                    >
                      {roles.map((role) => (
                        <Tab key={role} title={role} />
                      ))}
                    </Tabs>
                  </motion.div>

                  {/* Permissions Grid */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                  >
                    {menuList.map((menu) => (
                      <Card
                        key={menu.id}
                        shadow="none"
                        className={`p-1 border transition-all duration-300 rounded-2xl cursor-pointer group ${
                          permissions[selectedRole]?.[menu.id]
                            ? "border-[#2848A5]/20 bg-[#F0F4FF]/30 dark:bg-[#2848A5]/5"
                            : "border-gray-50 dark:border-dark-border hover:border-gray-200"
                        }`}
                        onClick={() => togglePermission(menu.id)}
                      >
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                permissions[selectedRole]?.[menu.id]
                                  ? "bg-white dark:bg-dark-navy text-[#2848A5] shadow-sm"
                                  : "bg-gray-50 dark:bg-dark-navy text-gray-400"
                              }`}
                            >
                              {menu.id === "rbac" ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                  <circle cx="12" cy="10" r="3" />
                                  <path d="M12 13v4" />
                                </svg>
                              ) : (
                                <SvgIcon name={menu.icon} size={20} useMask />
                              )}
                            </div>
                            <div>
                              <p className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">
                                {menu.label}
                              </p>
                              <p className="text-[12px] text-gray-500 dark:text-gray-400">
                                Manage visibility
                              </p>
                            </div>
                          </div>
                          <Switch
                            size="sm"
                            isSelected={
                              permissions[selectedRole]?.[menu.id] || false
                            }
                            color="primary"
                            onValueChange={() => togglePermission(menu.id)}
                            classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#2848A5]",
                            }}
                          />
                        </div>
                      </Card>
                    ))}
                  </motion.div>

                  {/* Save Section */}
                  <motion.div
                    variants={itemVariants}
                    className="flex justify-end pt-4"
                  >
                    <Button
                      id="save-rbac-btn"
                      size="lg"
                      className="bg-[#2848A5] text-white h-12 px-10 rounded-xl shadow-lg shadow-[#2848A5]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
