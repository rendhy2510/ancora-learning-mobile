"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, Chip, Button } from "@heroui/react";
import Image from "next/image";

import Link from "next/link";

interface KnowledgeCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  likes: string;
  comments: string;
  saved: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  likes,
  comments,
  saved,
}) => {
  return (
    <Link href={`/knowledge-bank/${id}`}>
      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface shadow-none p-5 lg:p-6 mb-6 hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-900 transition-all group cursor-pointer">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Thumbnail */}
          <div className="relative w-full md:w-[230px] aspect-[1.4/1] rounded-2xl overflow-hidden bg-gray-50 dark:bg-dark-navy/40 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-between py-1">
            <div className="space-y-4">
              <h3 className="text-[20px] md:text-[36px] font-medium text-[#111827] dark:text-white leading-tight group-hover:text-[#2848A5] transition-colors">
                {title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-500 dark:text-gray-400 font-medium line-clamp-2 leading-relaxed">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag, i) => (
                  <Chip
                    key={i}
                    size="sm"
                    variant="flat"
                    className="bg-gray-50 dark:bg-dark-navy text-gray-600 dark:text-gray-400 px-3 h-8 rounded-lg font-medium text-[11px] md:text-[12px] border border-gray-100 dark:border-dark-border"
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Footer Stats */}
            <div className="flex items-center gap-2 md:gap-2 mt-6 overflow-x-auto no-scrollbar pb-1">
              <Button
                variant="flat"
                size="sm"
                className="flex items-center gap-2 group/item bg-gray-50 dark:bg-dark-navy px-3 h-8 rounded-lg font-medium text-[11px] md:text-[12px] flex-shrink-0 hover:bg-gray-100 dark:hover:bg-dark-border/30 transition-all min-w-0"
              >
                <SvgIcon
                  name="heart"
                  className="w-4 h-4 md:w-5 md:h-5 group-hover/item:text-blue-500 transition-colors"
                />
                <span className="text-[13px] md:text-[14px] font-bold font-geist">
                  {likes} Likes
                </span>
              </Button>
              <Button
                variant="flat"
                size="sm"
                className="flex items-center gap-2 group/item bg-gray-50 dark:bg-dark-navy px-3 h-8 rounded-lg font-medium text-[11px] md:text-[12px] flex-shrink-0 hover:bg-gray-100 dark:hover:bg-dark-border/30 transition-all min-w-0"
              >
                <SvgIcon
                  name="message-circle"
                  className="w-4 h-4 md:w-5 md:h-5 group-hover/item:text-indigo-500 transition-colors"
                />
                <span className="text-[13px] md:text-[14px] font-bold font-geist">
                  {comments} Comments
                </span>
              </Button>
              <Button
                variant="flat"
                size="sm"
                className="flex items-center gap-2 group/item bg-gray-50 dark:bg-dark-navy px-3 h-8 rounded-lg font-medium text-[11px] md:text-[12px] flex-shrink-0 hover:bg-gray-100 dark:hover:bg-dark-border/30 transition-all min-w-0"
              >
                <SvgIcon
                  name="bookmark"
                  className="w-4 h-4 md:w-5 md:h-5 group-hover/item:text-emerald-500 transition-colors"
                />
                <span className="text-[13px] md:text-[14px] font-bold font-geist">
                  {saved} Saved
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default KnowledgeCard;
