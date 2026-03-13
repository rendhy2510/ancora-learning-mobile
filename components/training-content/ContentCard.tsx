"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";

interface ContentCardProps {
  image: string;
  title: string;
  subtitle: string;
  modules: number;
  level: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  image,
  title,
  subtitle,
  modules,
  level,
}) => {
  return (
    <Card
      shadow="none"
      className="border border-gray-100 dark:border-dark-border rounded-[18px] bg-white dark:bg-dark-surface p-0 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="p-2 pb-0">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <CardBody className="p-5 flex flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-[24px] font-medium text-[#1F2937] dark:text-gray-100 leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="text-blue-600">
              <SvgIcon name="solar_book-bold" size={18} />
            </div>
            <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300">
              {modules} Modules
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-blue-600">
              <SvgIcon name="ph_medal-military-fill" size={18} />
            </div>
            <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300">
              {level}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Button
            className="flex-1 h-11 rounded-xl bg-[#FFF1F1] dark:bg-red-900/20 text-[#E62D2D] text-[14px] border border-transparent hover:border-red-200 transition-all shadow-none"
            size="sm"
          >
            Delete
          </Button>
          <Button
            className="flex-1 h-11 rounded-xl bg-[#2848A5] text-white text-[14px] hover:bg-[#1E3A8A] transition-all shadow-none"
            size="sm"
          >
            Edit
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ContentCard;
