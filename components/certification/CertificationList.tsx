"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, CardBody, Input, Button } from "@heroui/react";
import Image from "next/image";

const CertificationCardProps = {
  date: "February 15, 2024",
  title: "Intro to Data Science",
  institution: "ABC Institute",
};

const CertificationCard: React.FC<typeof CertificationCardProps> = ({
  date,
  title,
  institution,
}) => {
  return (
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface shadow-none hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-900 transition-all p-3 group">
      {/* Certificate Visual Image */}
      <div className="relative w-full aspect-[235/147] mb-4 rounded-xl overflow-hidden bg-[#DEEAFB] dark:bg-[#1E293B] border border-[#DEEAFB] dark:border-dark-border/50 transition-all group-hover:border-blue-200 p-4">
        <div className="relative w-full h-full shadow-sm rounded-sm overflow-hidden">
          <Image
            src="/dummy/image.png"
            alt="Certificate"
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Subtitle/Institution overlay like in Figma */}
        <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm px-2 py-1 rounded-[4px] border border-gray-100 dark:border-dark-border">
          <p className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
            By {institution}
          </p>
        </div>
      </div>

      <CardBody className="p-0 space-y-4">
        <div className="space-y-1">
          <span className="text-[14px] text-gray-500 dark:text-gray-500 font-medium font-geist">
            {date}
          </span>
          <h4 className="text-[18px] font-medium text-[#111827] dark:text-gray-100 leading-tight block group-hover:text-[#2848A5] transition-colors">
            {title}
          </h4>
        </div>
        <Button className="w-full bg-[#243C7C] hover:bg-[#2848A5] text-white font-medium h-[44px] rounded-xl transition-all shadow-none">
          Download
        </Button>
      </CardBody>
    </Card>
  );
};

const CertificationList = () => {
  const certs = [
    {
      id: 1,
      date: "February 15, 2024",
      title: "Intro to Data Science",
      institution: "ABC Institute",
    },
    {
      id: 2,
      date: "March 5, 2024",
      title: "Basics of Graphic Design",
      institution: "123 Learning",
    },
    {
      id: 3,
      date: "January 10, 2024",
      title: "Advanced Digital Marketing",
      institution: "XYZ Academy",
    },
    {
      id: 4,
      date: "April 20, 2024",
      title: "Fundamentals of Web Development",
      institution: "Tech Institute",
    },
    {
      id: 5,
      date: "May 15, 2024",
      title: "Machine Learning Concepts",
      institution: "Future Skills",
    },
    {
      id: 6,
      date: "January 10, 2024",
      title: "Advanced Digital Marketing",
      institution: "XYZ Academy",
    },
    {
      id: 7,
      date: "February 15, 2024",
      title: "Intro to Data Science",
      institution: "ABC Institute",
    },
    {
      id: 8,
      date: "March 5, 2024",
      title: "Basics of Graphic Design",
      institution: "123 Learning",
    },
    {
      id: 9,
      date: "January 10, 2024",
      title: "Advanced Digital Marketing",
      institution: "XYZ Academy",
    },
    {
      id: 10,
      date: "June 30, 2024",
      title: "Blockchain Basics",
      institution: "Innovation Hub",
    },
    {
      id: 11,
      date: "July 25, 2024",
      title: "UI/UX Design Principles",
      institution: "Global Tech",
    },
    {
      id: 12,
      date: "August 1, 2024",
      title: "Cybersecurity Fundamentals",
      institution: "Code Academy",
    },
  ];

  return (
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface shadow-none flex flex-col p-2">
      {/* Header */}
      <div className="p-3 -mt-2 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 dark:border-dark-border -mx-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h3 className="text-[18px] font-medium text-[#111827] dark:text-white leading-tight">
            Certification List
          </h3>
        </div>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </div>

      {/* Search Bar Row */}
      <div className="px-1 py-3">
        <Input
          placeholder="Search Course"
          variant="bordered"
          classNames={{
            inputWrapper:
              "h-12 px-4 bg-white dark:bg-dark-navy/20 border-gray-100 dark:border-dark-border rounded-[12px] group-data-[focus=true]:border-[#2848A5] transition-all",
            input: "text-[15px] font-medium placeholder:text-gray-400",
          }}
          startContent={
            <SvgIcon name="search" className="w-4 h-4 text-gray-400 mr-2" />
          }
        />
      </div>

      {/* Grid */}
      <div className="p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
    </Card>
  );
};

export default CertificationList;
