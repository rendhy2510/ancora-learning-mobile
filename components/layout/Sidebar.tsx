"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
import { Capacitor } from "@capacitor/core";
import SvgIcon from "@/components/shared/SvgIcon";

interface MenuItem {
  id: string;
  label: string;
  shortLabel?: string;
  icon: React.ReactNode | ((active: boolean) => React.ReactNode);
  href: string;
}

const rolePermissions: Record<string, string[]> = {
  User: [
    "dashboard",
    "learning-progress",
    "assigned-courses",
    "learning-path",
    "knowledge-assessment",
    "certification-record",
    "social-learning",
    "knowledge-bank",
    "notifications",
    "settings",
  ],
  HC: [
    "dashboard",
    "employee-training",
    "attendance",
    "trainer",
    "training-content",
    "assessment-evaluation",
    "reports-analytics-hc",
    "certification-record",
    "notifications",
    "social-learning",
    "settings",
    "users",
    "rbac",
  ],
  Leader: [
    "dashboard",
    "team-progress",
    "knowledge-assessment",
    "behavior-monitoring",
    "learning-path",
    "social-learning",
    "knowledge-bank",
    "reports-analytics",
    "settings",
  ],
  BOD: [
    "dashboard",
    "reports-analytics",
    "users",
    "rbac",
    "notifications",
    "settings",
  ],
};

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<string>("HC");
  const [isMobileApp, setIsMobileApp] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const isMobile = Capacitor.isNativePlatform();
    setIsMobileApp(isMobile);
    if (isMobile) {
      document.body.style.paddingBottom =
        "calc(65px + env(safe-area-inset-bottom,0px))";
    }
    // 1. Get initial role (Priority: URL > LocalStorage > Default)
    let initialRole = "HC";
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get("role");
      const savedRole = localStorage.getItem("demo-role");

      if (roleParam && rolePermissions[roleParam]) {
        initialRole = roleParam;
        localStorage.setItem("demo-role", roleParam);
      } else if (savedRole && rolePermissions[savedRole]) {
        initialRole = savedRole;
      }
    }

    setCurrentRole(initialRole);

    const handleToggle = () => setIsMobileOpen((prev) => !prev);
    const handleRoleChange = (e: any) => {
      const newRole = e.detail;
      if (newRole && rolePermissions[newRole]) {
        setCurrentRole(newRole);
      }
    };

    window.addEventListener("toggle-sidebar", handleToggle);
    window.addEventListener("role-changed", handleRoleChange);

    return () => {
      window.removeEventListener("toggle-sidebar", handleToggle);
      window.removeEventListener("role-changed", handleRoleChange);
    };
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const allMenuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      shortLabel: "Home",
      icon: (
        <SvgIcon
          name="dashboard"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/",
    },
    {
      id: "employee-training",
      label: "Employee Training",
      shortLabel: "Training",
      icon: (
        <SvgIcon
          name="fluent_people-team-16-filled"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/employee-training",
    },
    {
      id: "attendance",
      label: "Attendance",
      shortLabel: "Absensi",
      icon: (
        <SvgIcon
          name="tabler_list-check"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/attendance",
    },
    {
      id: "trainer",
      label: "Trainer",
      shortLabel: "Trainer",
      icon: (
        <SvgIcon
          name="ph_chalkboard-teacher-fill"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/trainer",
    },
    {
      id: "training-content",
      label: "Training Content",
      shortLabel: "Konten",
      icon: (
        <SvgIcon
          name="courses_enrolled"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/training-content",
    },
    {
      id: "knowledge-assessment-leader",
      label: "Knowledge Assessment Leader",
      shortLabel: "Assessment",
      icon: (
        <SvgIcon
          name="knowledge_assessment"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/knowledge-assessment-leader",
    },
    {
      id: "assessment-evaluation",
      label: "Assessment & Evaluation",
      shortLabel: "Evaluasi",
      icon: (
        <SvgIcon
          name="basil_document-solid"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/assessment-evaluation",
    },
    {
      id: "team-progress",
      label: "Team Progress",
      shortLabel: "Tim",
      icon: (
        <SvgIcon
          name="learning_progress"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/team-progress",
    },
    {
      id: "learning-progress",
      label: "Learning Progress",
      shortLabel: "Progress",
      icon: (
        <SvgIcon
          name="learning_progress"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/learning-progress",
    },
    {
      id: "knowledge-assessment",
      label: "Knowledge Assessment",
      shortLabel: "Assessment",
      icon: (
        <SvgIcon
          name="knowledge_assessment"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/knowledge-assessment",
    },
    {
      id: "behavior-monitoring",
      label: "Behavior Monitoring",
      shortLabel: "Perilaku",
      icon: (
        <SvgIcon
          name="courses_enrolled"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/behavior-monitoring",
    },
    {
      id: "assigned-courses",
      label: "Assigned Courses",
      shortLabel: "Kursus",
      icon: (
        <SvgIcon
          name="assigned_courses"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/assigned-courses",
    },
    {
      id: "learning-path",
      label: "Learning Path",
      shortLabel: "Path",
      icon: (
        <SvgIcon
          name="learning_path"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/learning-path",
    },
    {
      id: "certification-record",
      label: "Certification Record",
      shortLabel: "Sertifikat",
      icon: (
        <SvgIcon
          name="certification_record"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/certification-record",
    },
    {
      id: "social-learning",
      label: "Social Learning",
      shortLabel: "Sosial",
      icon: (
        <SvgIcon
          name="social_learning"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/social-learning",
    },
    {
      id: "knowledge-bank",
      label: "Knowledge Bank",
      icon: (active: boolean) => (
        <SvgIcon
          name={
            active
              ? "mdi_book-education_active"
              : "mdi_book-education_nonactive"
          }
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/knowledge-bank",
    },
    {
      id: "reports-analytics",
      label: "Reports & Analytics",
      icon: (
        <SvgIcon
          name="mage_chart-fill"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/reports-analytics",
    },
    {
      id: "reports-analytics-hc",
      label: "Report & Analytic",
      icon: (
        <SvgIcon
          name="mage_chart-fill"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/report-analytics-hc",
    },
    {
      id: "users",
      label: "Users",
      icon: (
        <SvgIcon
          name="solar_user-bold"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/users",
    },
    {
      id: "rbac",
      label: "RBAC",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 md:w-5 md:h-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 13v4" />
        </svg>
      ),
      href: "/rbac",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: (
        <SvgIcon
          name="notification_menu"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/notifications",
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <SvgIcon
          name="settings_menu"
          size={20}
          useMask
          className="w-5 h-5 md:w-5 md:h-5"
        />
      ),
      href: "/settings",
    },
  ];

  const allowedMenuIds =
    rolePermissions[currentRole] || rolePermissions["User"];
  const menuItems = allMenuItems.filter((item) =>
    allowedMenuIds.includes(item.id),
  );

  if (isMobileApp) {
    const bottomNavItems = menuItems.slice(0, 4);

    return (
      <>
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-surface shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-50 flex items-center justify-between px-2 pt-3 pb-[calc(10px+env(safe-area-inset-bottom,0px))] border-t border-gray-100 dark:border-dark-border">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center w-full gap-1.5"
              >
                <div
                  className={`flex items-center justify-center shrink-0 w-6 h-6 ${
                    isActive
                      ? "text-[#2848A5] dark:text-[#2848A5]"
                      : "text-[#64748B] dark:text-gray-400"
                  }`}
                >
                  {item.id === "rbac" ? (
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
                  ) : typeof item.icon === "function" ? (
                    item.icon(isActive)
                  ) : (
                    item.icon
                  )}
                </div>
                <span
                  className={`text-[10px] ${
                    isActive
                      ? "text-[#2848A5] font-semibold"
                      : "text-[#64748B] font-medium"
                  } text-center w-full leading-tight line-clamp-1`}
                >
                  {item.shortLabel || item.label}
                </span>
              </Link>
            );
          })}
          <button
            onClick={onOpen}
            className="flex flex-col items-center justify-center w-full gap-1.5"
          >
            <div className="flex items-center justify-center shrink-0 w-6 h-6 text-[#64748B] hover:text-[#2848A5]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="5" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="19" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#64748B] hover:text-[#2848A5] truncate px-1 text-center w-full">
              Lainnya
            </span>
          </button>
        </nav>

        {/* More Menu Modal */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="bottom"
          scrollBehavior="inside"
          className="m-0 bg-white dark:bg-dark-surface rounded-t-[24px] rounded-b-none"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-[18px] font-bold text-gray-900 dark:text-white pt-6">
                  Semua Menu
                </ModalHeader>
                <ModalBody className="pb-[calc(24px+env(safe-area-inset-bottom,0px))] px-6">
                  <div className="grid grid-cols-4 gap-y-6 gap-x-2 mt-2">
                    {menuItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={onClose}
                          className="flex flex-col items-center gap-2"
                        >
                          <div
                            className={`w-14 h-14 rounded-[16px] flex items-center justify-center shadow-sm transition-all ${
                              isActive
                                ? "bg-[#2848A5] text-white"
                                : "bg-[#F8FAFC] dark:bg-dark-navy/40 text-[#64748B] dark:text-gray-300 border border-gray-100 dark:border-dark-border"
                            }`}
                          >
                            {item.id === "rbac" ? (
                              <svg
                                width="24"
                                height="24"
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
                            ) : typeof item.icon === "function" ? (
                              item.icon(isActive)
                            ) : (
                              item.icon
                            )}
                          </div>
                          <span
                            className={`text-[11px] leading-tight text-center max-w-full px-1 line-clamp-2 ${
                              isActive
                                ? "font-bold text-[#2848A5]"
                                : "font-medium text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-100 dark:border-dark-border">
                    <Button className="w-full bg-[#FFF1F1] text-[#E62D2D] border border-[#FFA1A1] h-12 rounded-[14px] font-semibold text-[14px] flex items-center justify-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Log Out
                    </Button>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[45] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen transition-transform duration-300 z-50 bg-white dark:bg-dark-surface border-r border-gray-100 dark:border-dark-border shadow-sm lg:!bg-transparent lg:border-none lg:shadow-none flex flex-col ${
          isCollapsed ? "w-20" : "w-[245px]"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="h-28 flex items-center justify-between px-8">
          {!isCollapsed && (
            <div className="flex items-center w-full">
              <div className="relative w-full h-14 flex items-center justify-start">
                <Image
                  src="/ancora_logo_final_dark.png"
                  alt="Ancora Logo"
                  fill
                  className="object-contain object-left dark:hidden"
                  priority
                />
                <Image
                  src="/ancora_logo_final.png"
                  alt="Ancora Logo"
                  fill
                  className="object-contain object-left hidden dark:block"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Menu Label */}
        {!isCollapsed && (
          <div className="px-6 pb-2">
            <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200">
              Menu ({currentRole === "HC" ? "HC/L&D" : currentRole})
            </p>
          </div>
        )}

        {/* Menu Items */}
        <nav className="px-3 py-2 space-y-2 overflow-y-auto no-scrollbar flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-transparent text-[#22272F] dark:text-gray-100 border border-gray-200 dark:border-dark-border shadow-sm font-semibold"
                    : "text-[#4F4F4F] hover:text-[#22272F] dark:text-gray-400 dark:hover:text-gray-200 font-medium"
                } ${isCollapsed ? "justify-center" : ""}`}
                title={isCollapsed ? item.label : ""}
              >
                <div
                  className={`flex items-center justify-center shrink-0 ${
                    isActive
                      ? "text-[#2848A5] dark:text-[#2848A5]"
                      : "text-[#4F4F4F] dark:text-gray-400"
                  }`}
                >
                  {item.id === "rbac" ? (
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
                  ) : typeof item.icon === "function" ? (
                    item.icon(isActive)
                  ) : (
                    item.icon
                  )}
                </div>
                {!isCollapsed && (
                  <span className="text-[14px]">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto px-6 pb-8">
          <Button
            variant="light"
            className={`flex items-center gap-3 w-full text-red-600 transition-colors h-auto p-2 bg-transparent min-w-0 ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
            title={isCollapsed ? "Log Out" : ""}
          >
            <div className="text-red-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
            {!isCollapsed && (
              <span className="text-[14px] font-semibold">Log Out</span>
            )}
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
