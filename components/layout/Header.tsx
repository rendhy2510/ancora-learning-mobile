"use client";

import React, { useState } from "react";
import Image from "next/image";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Input,
  Button,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Select,
  SelectItem,
} from "@heroui/react";
import { Capacitor } from "@capacitor/core";

interface HeaderProps {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  pageTitle?: string;
  pageSubtitle?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  noSidebar?: boolean;
  /** Optional content rendered between notifications and user profile (e.g. date range + Export button) */
  headerRightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  userName = "Maryama",
  userEmail = "maruyama.2460@gmail.com",
  userAvatar = "/user_avatar.png",
  pageTitle = "Dashboard",
  pageSubtitle,
  breadcrumbs,
  noSidebar = false,
  headerRightContent,
}) => {
  const displayAvatar = userAvatar || "/user_avatar.png";

  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState(new Set(["EN"]));
  const [currentRole, setCurrentRole] = useState("HC");

  React.useEffect(() => {
    // 1. Get initial role (Priority: URL > LocalStorage > Default)
    let initialRole = "HC";
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get("role");
      const savedRole = localStorage.getItem("demo-role");

      if (roleParam) {
        initialRole = roleParam;
      } else if (savedRole) {
        initialRole = savedRole;
      }
    }
    setCurrentRole(initialRole);

    const handleRoleChange = (e: any) => {
      if (e.detail) setCurrentRole(e.detail);
    };

    window.addEventListener("role-changed", handleRoleChange);
    return () => window.removeEventListener("role-changed", handleRoleChange);
  }, []);

  const handleRoleChange = (role: string) => {
    setCurrentRole(role);
    localStorage.setItem("demo-role", role);
    window.dispatchEvent(new CustomEvent("role-changed", { detail: role }));
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileApp, setIsMobileApp] = useState(false);

  React.useEffect(() => {
    setIsMobileApp(Capacitor.isNativePlatform());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const notifications = [
    {
      id: "1",
      title: "New Course Assigned",
      message: 'You have been assigned to "Advanced UI Design"',
      time: "5 min ago",
      unread: true,
    },
    {
      id: "2",
      title: "Quiz Reminder",
      message: 'Quiz for "User Experience UI 3" is due tomorrow',
      time: "1 hour ago",
      unread: true,
    },
    {
      id: "3",
      title: "Certificate Earned",
      message: "Congratulations! You earned a certificate",
      time: "2 hours ago",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header
      className={`fixed top-0 right-0 left-0 ${
        noSidebar ? "" : "lg:left-[245px]"
      } ${
        isMobileApp
          ? "pt-[45px] pb-2 min-h-[5.5rem]"
          : "pt-0 pb-1 min-h-[4rem] md:min-h-[5rem]"
      } z-40 px-4 md:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-gray-200/50 dark:border-dark-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      {/* Mobile Hamburger & Page Title */}
      <div className="flex items-center gap-3 md:gap-6">
        {noSidebar ? (
          <div className="flex items-center gap-3 pr-4 border-r border-gray-100 dark:border-dark-border mr-2">
            <Image
              src={
                isDarkMode
                  ? "/ancora_logo_final.png"
                  : "/ancora_logo_final_dark.png"
              }
              alt="Ancora Logo"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </div>
        ) : (
          !isMobileApp && (
            <Button
              isIconOnly
              variant="flat"
              className="lg:hidden text-brand bg-brand/5 dark:bg-dark-navy hover:bg-brand/10 dark:hover:bg-dark-border min-w-10 w-10 h-10 rounded-xl"
              onClick={() => window.dispatchEvent(new Event("toggle-sidebar"))}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          )
        )}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-[24px] font-medium text-gray-900 dark:text-white leading-tight">
            {pageTitle}
          </h1>
          {breadcrumbs && (
            <div className="hidden md:flex items-center gap-2 text-[12px] font-medium text-gray-400 mb-0.5">
              {breadcrumbs}
            </div>
          )}
          {!breadcrumbs && (
            <div className="flex items-center gap-1.5 text-[10px] md:text-[13px] text-gray-500 dark:text-gray-400 mt-1">
              {pageSubtitle || `Welcome Back, ${userName}`}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Input
            type="text"
            placeholder="Search Course"
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={
              <SvgIcon name="search" className="w-5 h-5 text-gray-400" />
            }
            classNames={{
              base: "w-[260px] h-12",
              inputWrapper:
                "h-full px-3 py-0 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-transparent hover:bg-white dark:hover:bg-transparent focus-within:!ring-2 focus-within:!ring-teal-500 focus-within:!border-transparent transition-all shadow-none",
              input:
                "text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-[14px]",
            }}
            variant="bordered"
            radius="lg"
          />
        </div>

        {/* Dark Mode Toggle - hidden on native mobile */}
        {!isMobileApp && (
          <Button
            isIconOnly
            onClick={toggleDarkMode}
            className="relative w-10 h-10 md:w-12 md:h-12 border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border/20 transition-colors bg-white dark:bg-transparent min-w-0"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </Button>
        )}

        {/* Notifications - hidden on native mobile */}
        {!isMobileApp && (
          <div className="relative">
            <Dropdown
              placement="bottom-end"
              className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl shadow-lg"
            >
              <DropdownTrigger>
                <div className="inline-block relative">
                  <Badge
                    content={unreadCount}
                    color="danger"
                    isInvisible={unreadCount === 0}
                    shape="circle"
                    classNames={{ badge: "border-none" }}
                  >
                    <Button
                      isIconOnly
                      className="relative w-10 h-10 md:w-12 md:h-12 border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border/20 transition-colors bg-white dark:bg-transparent min-w-0"
                    >
                      <svg
                        className="w-6 h-6 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </Button>
                  </Badge>
                </div>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="Notifications"
                className="w-80 p-0"
                itemClasses={{
                  base: "p-0 rounded-none data-[hover=true]:bg-transparent",
                }}
              >
                {[
                  <DropdownItem
                    key="header"
                    isReadOnly
                    className="cursor-default"
                  >
                    <div className="p-4 border-b border-gray-200 dark:border-dark-border">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                        Notifications
                      </h3>
                    </div>
                  </DropdownItem>,

                  ...notifications.map((notification) => (
                    <DropdownItem
                      key={notification.id}
                      textValue={notification.title}
                    >
                      <div
                        className={`p-4 border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg cursor-pointer transition-colors w-full ${
                          notification.unread
                            ? "bg-blue-50 dark:bg-blue-900/20"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          )}
                          <div className="flex-1 whitespace-normal">
                            <h4 className="font-medium text-sm text-gray-800 dark:text-gray-200">
                              {notification.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                  )),

                  <DropdownItem
                    key="footer"
                    isReadOnly
                    className="cursor-default"
                  >
                    <div className="p-3 text-center border-t border-gray-200 dark:border-dark-border w-full">
                      <button className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium w-full">
                        View All Notifications
                      </button>
                    </div>
                  </DropdownItem>,
                ]}
              </DropdownMenu>
            </Dropdown>
          </div>
        )}

        {headerRightContent && (
          <>
            <div className="hidden sm:block h-8 w-px bg-gray-200 dark:bg-dark-border mx-1"></div>
            {headerRightContent}
            <div className="hidden sm:block h-8 w-px bg-gray-200 dark:bg-dark-border mx-1"></div>
          </>
        )}

        {/* User Profile */}
        <div className="relative bg-transparent md:bg-white md:dark:bg-transparent md:border border-gray-200 dark:border-dark-border rounded-2xl">
          <Dropdown
            placement="bottom-end"
            className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl shadow-lg w-64"
          >
            <DropdownTrigger>
              <Button
                variant="light"
                className="flex items-center gap-2 p-1.5 h-auto rounded-xl hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors min-w-0"
                disableRipple
              >
                {displayAvatar ? (
                  <Avatar
                    src={displayAvatar}
                    name={userName}
                    className="w-10 h-10 border-2 border-white dark:border-dark-border text-large"
                  />
                ) : (
                  <Avatar
                    name={userName.charAt(0)}
                    className="w-10 h-10 bg-gradient-to-br from-teal-500 to-orange-500 text-white font-semibold flex-shrink-0"
                  />
                )}
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-100 block">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 block -mt-0.5 max-w-[130px] truncate">
                    {userEmail}
                  </p>
                </div>
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              aria-label="Profile actions"
              className="p-2"
              itemClasses={{ base: "gap-3" }}
            >
              <DropdownItem
                key="profile_info"
                className="h-16 gap-2"
                isReadOnly
              >
                <div className="flex items-center gap-3 w-full">
                  {displayAvatar ? (
                    <Avatar
                      src={displayAvatar}
                      name={userName}
                      className="w-10 h-10"
                    />
                  ) : (
                    <Avatar
                      name={userName.charAt(0)}
                      className="w-10 h-10 bg-gradient-to-br from-teal-500 to-orange-500"
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      {userName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {userEmail}
                    </p>
                  </div>
                </div>
              </DropdownItem>

              <DropdownItem
                key="my_profile"
                startContent={
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              >
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  My Profile
                </span>
              </DropdownItem>

              <DropdownItem
                key="settings"
                startContent={
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  Settings
                </span>
              </DropdownItem>

              <DropdownItem
                key="dark_mode"
                isReadOnly
                className="cursor-default"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    {isDarkMode ? (
                      <svg
                        className="w-5 h-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-600 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      Dark Mode
                    </span>
                  </div>
                  {/* Toggle Switch */}
                  <button
                    onClick={toggleDarkMode}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                      isDarkMode ? "bg-[#2848A5]" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                        isDarkMode ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </DropdownItem>

              <DropdownItem
                key="role_switcher"
                isReadOnly
                className="cursor-default"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#2848A5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                      />
                      <circle cx="8.5" cy="7" r="4" strokeWidth={2} />
                      <polyline points="17 11 19 13 23 9" strokeWidth={2} />
                    </svg>
                    <span className="text-sm font-semibold text-[#2848A5]">
                      Demo Role
                    </span>
                  </div>
                  <Select
                    selectedKeys={[currentRole]}
                    onSelectionChange={(keys) =>
                      handleRoleChange(Array.from(keys)[0] as string)
                    }
                    size="sm"
                    className="w-24 bg-transparent min-w-[50px] shadow-none"
                    aria-label="Role selection"
                  >
                    <SelectItem key="User">User</SelectItem>
                    <SelectItem key="HC">HC</SelectItem>
                    <SelectItem key="Leader">Leader</SelectItem>
                    <SelectItem key="BOD">BOD</SelectItem>
                  </Select>
                </div>
              </DropdownItem>

              <DropdownItem
                key="language"
                isReadOnly
                className="cursor-default"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-gray-600 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      Language
                    </span>
                  </div>
                  <Select
                    selectedKeys={language}
                    onSelectionChange={setLanguage as any}
                    size="sm"
                    className="w-20 bg-transparent min-w-[50px] shadow-none"
                    aria-label="Language selection"
                  >
                    <SelectItem key="EN">EN</SelectItem>
                    <SelectItem key="ID">ID</SelectItem>
                  </Select>
                </div>
              </DropdownItem>

              <DropdownItem
                key="logout"
                className="text-danger"
                color="danger"
                startContent={
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
                }
              >
                <span className="text-sm font-medium">Log Out</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
