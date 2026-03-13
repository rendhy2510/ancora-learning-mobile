"use client";

import React, { useState } from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";

interface ScheduleEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  category: string;
  categoryColor: string;
}

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 1));
  const [selectedDay, setSelectedDay] = useState(19);

  const events: ScheduleEvent[] = [
    {
      id: 1,
      title: "3D Animation & Motion Graphic",
      date: "20, Aug 2026",
      time: "2:45 PM",
      category: "UI Course",
      categoryColor: "#C4DDF9",
    },
    {
      id: 2,
      title: "Frontend Development",
      date: "21, Aug 2026",
      time: "10:30 AM",
      category: "Web Developer",
      categoryColor: "#C4DDF9",
    },
    {
      id: 3,
      title: "Agile Methodologies",
      date: "22, Aug 2026",
      time: "1:15 PM",
      category: "Product Manager",
      categoryColor: "#C4DDF9",
    },
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const previousMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = 35;

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square opacity-0"></div>,
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === selectedDay;
      days.push(
        <Button
          key={day}
          isIconOnly
          onClick={() => setSelectedDay(day)}
          className={`aspect-square w-8 h-8 text-[12px] font-medium font-geist rounded-full mx-auto transition-all min-w-0 ${
            isToday
              ? "bg-[#10B981] text-white font-semibold font-geist shadow-md shadow-[#10B981]/20"
              : "bg-transparent text-[#4B5563] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-navy"
          }`}
        >
          {day}
        </Button>,
      );
    }

    const remainingCells = totalCells - days.length;
    for (let i = 0; i < remainingCells; i++) {
      days.push(
        <div key={`empty-end-${i}`} className="aspect-square opacity-0"></div>,
      );
    }

    return days;
  };

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl p-2 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm",
      }}
    >
      {/* Header */}
      <CardHeader className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-dark-border pb-2.5 -mx-6 px-6 pt-1 !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="stash_data-date-solid" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Schedule
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </CardHeader>

      {/* Main Content Grid */}
      <CardBody className="p-0 overflow-y-visible">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5">
          {/* Left Column: Calendar */}
          <Card
            shadow="none"
            classNames={{
              base: "rounded-2xl p-6 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-navy",
            }}
          >
            <div>
              <div className="relative flex items-center justify-center mb-5">
                <Button
                  isIconOnly
                  variant="light"
                  onClick={previousMonth}
                  className="absolute left-0 w-7 h-7 min-w-0 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#B5BEC6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Button>

                <h3 className="text-[15px] font-semibold text-[#1F2937] dark:text-gray-100">
                  {monthNames[currentDate.getMonth()]}{" "}
                  <span className="font-geist">
                    {currentDate.getFullYear()}
                  </span>
                </h3>

                <Button
                  isIconOnly
                  variant="light"
                  onClick={nextMonth}
                  className="absolute right-0 w-7 h-7 min-w-0 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#B5BEC6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-[10px] font-semibold text-[#B5BEC6] py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-y-1 gap-x-0">
                {renderCalendarDays()}
              </div>
            </div>
          </Card>

          {/* Right Column: Upcoming Events */}
          <div>
            <div className="space-y-3">
              {events.map((event) => (
                <Card
                  key={event.id}
                  shadow="none"
                  classNames={{
                    base: "relative p-4 rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-navy hover:bg-[#F5F5F5] dark:hover:bg-dark-surface transition-all",
                  }}
                >
                  <div className="pr-16">
                    <span
                      className="inline-block text-[11px] font-medium text-[#2848A5] border border-[#C4DDF9] px-3 py-1 rounded-md mb-2"
                      style={{ backgroundColor: event.categoryColor }}
                    >
                      {event.category}
                    </span>
                    <h4 className="text-[24px] font-medium text-[#1F2937] dark:text-gray-100 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-[13px] text-[#6B7280] dark:text-gray-400 font-geist tracking-wide">
                      {event.date}
                    </p>
                  </div>
                  <span className="absolute bottom-3 right-4 text-[13px] font-medium text-[#6B7280] font-geist">
                    {event.time}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Schedule;
