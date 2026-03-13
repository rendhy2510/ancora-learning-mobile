"use client";

import React from "react";
import Image from "next/image";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, CardHeader, CardBody, Button, Progress } from "@heroui/react";

interface Course {
  id: number;
  title: string;
  description: string;
  lessons: number;
  totalLessons: number;
  progress: number;
  image: string;
}

const MyCourse = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Introduction to Design Principles",
      description:
        "Learn The Basic Principles Of Design, Which Include Balance, Contrast, Alignment, Hier...",
      lessons: 20,
      totalLessons: 35,
      progress: (20 / 35) * 100,
      image: "/course-1.jpg",
    },
    {
      id: 2,
      title: "Fundamentals of Algorithm for Programmers",
      description:
        "Explore The Fundamentals Of Color Theory, Including Understanding The Color Wheel...",
      lessons: 15,
      totalLessons: 25,
      progress: (15 / 25) * 100,
      image: "/course-2.jpg",
    },
    {
      id: 3,
      title: "Intro to Cyber Security Course",
      description:
        "Delve Into The Art Of Typography, Focusing On Typefaces, Font Pairing, And The Prin...",
      lessons: 18,
      totalLessons: 30,
      progress: (18 / 30) * 100,
      image: "/course-3.jpg",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl p-2 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm",
      }}
    >
      <CardHeader className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-dark-border pb-2.5 -mx-6 px-6 pt-1 !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="my_courses" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            My Course
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

      <CardBody className="p-0 overflow-y-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              shadow="sm"
              classNames={{
                base: "course-card rounded-2xl flex flex-col h-full bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border shadow-sm",
              }}
            >
              {/* Course Image */}
              <div className="p-3 pb-0">
                <div className="relative h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/dummy/course_thumbnail.png"
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Course Content */}
              <CardBody className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Course Info */}
                  <div className="flex items-center text-[12px] font-semibold text-gray-900 dark:text-gray-300 mb-3">
                    <div className="flex items-center">
                      <span className="font-geist tracking-wide text-[13px]">
                        {course.lessons}/{course.totalLessons}
                      </span>
                      &nbsp;Lesson
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="course-progress">
                    <Progress
                      aria-label={`Progress for ${course.title}`}
                      value={course.progress}
                      classNames={{
                        track: "bg-gray-100 dark:bg-gray-800 h-2",
                        indicator: "bg-blue-600",
                      }}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MyCourse;
