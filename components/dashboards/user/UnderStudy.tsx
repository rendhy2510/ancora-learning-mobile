"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import Image from "next/image";

interface StudyCourse {
  id: number;
  title: string;
  description: string;
  lessonsCompleted: number;
  totalLessons: number;
  imageUrl: string;
}

const UnderStudy = () => {
  const courses: StudyCourse[] = [
    {
      id: 1,
      title: "Introduction to Design Principles",
      description:
        "Learn The Basic Principles Of Design, Which Include Balance, Contrast, Alignment, Hierarchy...",
      lessonsCompleted: 20,
      totalLessons: 25,
      imageUrl: "/dummy/course_thumbnail.png",
    },
    {
      id: 2,
      title: "Fundamentals of Algorithm for Programmers",
      description:
        "Explore The Fundamentals Of Color Theory, Including Understanding The Color Wheel...",
      lessonsCompleted: 15,
      totalLessons: 20,
      imageUrl: "/dummy/course_thumbnail.png",
    },
    {
      id: 3,
      title: "Intro to Cyber Security Course",
      description:
        "Delve Into The Art Of Typography, Focusing On Typefaces, Font Pairing, And The Impact...",
      lessonsCompleted: 10,
      totalLessons: 14,
      imageUrl: "/dummy/course_thumbnail.png",
    },
    {
      id: 4,
      title: "Introduction to Design Principles",
      description:
        "Learn The Basic Principles Of Design, Which Include Balance, Contrast, Alignment, Hierarchy...",
      lessonsCompleted: 20,
      totalLessons: 25,
      imageUrl: "/dummy/course_thumbnail.png",
    },
    {
      id: 5,
      title: "Fundamentals of Algorithm for Programmers",
      description:
        "Explore The Fundamentals Of Color Theory, Including Understanding The Color Wheel...",
      lessonsCompleted: 15,
      totalLessons: 20,
      imageUrl: "/dummy/course_thumbnail.png",
    },
    {
      id: 6,
      title: "Intro to Cyber Security Course",
      description:
        "Delve Into The Art Of Typography, Focusing On Typefaces, Font Pairing, And The Impact...",
      lessonsCompleted: 10,
      totalLessons: 14,
      imageUrl: "/dummy/course_thumbnail.png",
    },
  ];

  return (
    <div className="rounded-2xl p-3 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-dark-border pb-4 -mx-3 px-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 dark:border-dark-border">
            <SvgIcon name="my_courses" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Under Study
          </h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center border border-gray-100 dark:border-dark-border rounded-lg">
            <SvgIcon name="more-horizontal" />
          </div>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {courses.map((course) => {
          const progressPercentage =
            (course.lessonsCompleted / course.totalLessons) * 100;

          return (
            <div
              key={course.id}
              className="flex flex-col border border-gray-100 dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-dark-navy"
            >
              {/* Card Image */}
              <div className="p-3 pb-0">
                <div className="relative h-40 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-[15px] text-gray-900 dark:text-gray-100 leading-tight mb-2">
                    {course.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Progress Info */}
                  <div className="flex items-center text-[11px] font-semibold text-gray-900 dark:text-gray-300 mb-2">
                    <span className="font-geist tracking-wide text-[12px]">
                      {course.lessonsCompleted}/{course.totalLessons}
                    </span>
                    &nbsp;Lesson
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2848A5] rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnderStudy;
