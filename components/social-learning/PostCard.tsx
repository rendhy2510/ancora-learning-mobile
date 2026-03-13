"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, Avatar, Button, Input, Chip } from "@heroui/react";
import Image from "next/image";

interface PostCardProps {
  id: number;
  userName: string;
  avatar: string;
  time: string;
  department: string;
  content: string;
  points: string;
  likes: string;
  comments: string;
  saved: string;
  image: string;
  isVerified?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  avatar,
  time,
  department,
  content,
  points,
  likes,
  comments,
  saved,
  image,
  isVerified = true,
}) => {
  return (
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface shadow-none p-4 lg:p-6 mb-8 overflow-hidden group">
      <div className="flex gap-4">
        {/* Avatar aligned to the left top */}
        <Avatar src={avatar} className="w-12 h-12 flex-shrink-0" />

        {/* Content Column indented to the right of the avatar */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Header Info Row */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h4 className="text-[17px] font-medium text-[#111827] dark:text-white leading-tight">
                  {userName}
                </h4>
                {isVerified && (
                  <div className="flex items-center justify-center relative -top-1.5 -ml-1">
                    <SvgIcon
                      name="material-symbols_verified-rounded"
                      size={14}
                    />
                  </div>
                )}
                <span className="text-[14px] text-gray-400 font-medium whitespace-nowrap">
                  {time}
                </span>
              </div>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium">
                {department}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Chip
                size="md"
                variant="flat"
                color="warning"
                className="bg-[#FFF9E6] dark:bg-amber-900/20 border border-[#F9A307]/30 dark:border-none px-4 h-9 shadow-none rounded-lg"
                classNames={{
                  content:
                    "text-[#D97706] dark:text-yellow-500 font-bold text-[13px] flex items-center gap-1.5",
                }}
                startContent={<SvgIcon name="material-symbols_trophy" />}
              >
                {points} Points
              </Chip>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
              >
                <SvgIcon name="more-horizontal" className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Post Body (Text & Image) */}
          <div className="space-y-4">
            <p className="text-[15px] font-medium leading-relaxed text-[#4F4F4F] dark:text-gray-300">
              {content}
            </p>

            {/* Post Image Wrap */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-gray-50 dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border group-hover:shadow-lg transition-all duration-500">
              <Image
                src={image}
                alt="Post Image"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Action Stats (Horizontal Row of Cards) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FBFBFB] dark:bg-blue-900/10">
              <SvgIcon name="heart" className="w-4 h-4 text-blue-500" />
              <span className="text-[13px] font-medium font-geist text-gray-600 dark:text-gray-300">
                {likes} Likes
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FBFBFB] dark:bg-indigo-900/10">
              <SvgIcon
                name="message-circle"
                className="w-4 h-4 text-indigo-500"
              />
              <span className="text-[13px] font-medium font-geist text-gray-600 dark:text-gray-300">
                {comments} Comments
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FBFBFB] dark:bg-emerald-900/10">
              <SvgIcon name="bookmark" className="w-4 h-4 text-emerald-500" />
              <span className="text-[13px] font-medium font-geist text-gray-600 dark:text-gray-300">
                {saved} Saved
              </span>
            </div>
          </div>

          {/* Comment Section at the bottom */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-50 dark:border-dark-border/30 mt-2">
            <Avatar
              src="https://i.pravatar.cc/150?u=maruyama"
              className="w-10 h-10 flex-shrink-0"
            />
            <div className="flex-1">
              <Input
                placeholder="Write your comment..."
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "h-11 px-6 bg-gray-50/50 dark:bg-dark-navy/20 border-gray-100 dark:border-dark-border rounded-full hover:border-[#2848A5]/30 group-data-[focus=true]:border-[#2848A5] transition-all",
                  input:
                    "text-[14px] font-medium placeholder:text-gray-400 font-geist",
                }}
                endContent={
                  <button className="text-gray-400 hover:text-[#2848A5] transition-all p-1">
                    <SvgIcon name="mingcute_emoji-line" />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
