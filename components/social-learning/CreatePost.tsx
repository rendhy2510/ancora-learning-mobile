"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, Avatar, Button, Input } from "@heroui/react";

const CreatePost = () => {
  return (
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface shadow-none p-4 lg:p-6 mb-8">
      <div className="flex items-start gap-4">
        {/* Avatar on the left */}
        <Avatar
          src="https://i.pravatar.cc/150?u=maruyama"
          className="w-12 h-12 flex-shrink-0"
        />

        {/* All content indented to the right, aligning with where the name would be */}
        <div className="flex-1 space-y-4">
          <div className="relative group">
            <Input
              placeholder="Share your knowledge today!!!"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-12 px-4 bg-gray-50/50 dark:bg-dark-navy/20 border-gray-100 dark:border-dark-border rounded-xl group-data-[focus=true]:border-[#2848A5] transition-all",
                input: "text-[15px] font-medium placeholder:text-gray-400",
              }}
              endContent={
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <SvgIcon name="mingcute_emoji-line" />
                </button>
              }
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <Button
                variant="flat"
                className="bg-gray-50 dark:bg-dark-navy/40 border border-gray-100 dark:border-dark-border text-[#4F4F4F] dark:text-gray-400 font-medium rounded-lg h-10 px-4"
                startContent={<SvgIcon name="material-symbols_image-rounded" />}
              >
                Image
              </Button>
              <Button
                variant="flat"
                className="bg-gray-50 dark:bg-dark-navy/40 border border-gray-100 dark:border-dark-border text-[#4F4F4F] dark:text-gray-400 font-medium rounded-lg h-10 px-4"
                startContent={<SvgIcon name="majesticons_video" />}
              >
                Video
              </Button>
              <Button
                variant="flat"
                className="bg-gray-50 dark:bg-dark-navy/40 border border-gray-100 dark:border-dark-border text-[#4F4F4F] dark:text-gray-400 font-medium rounded-lg h-10 px-4"
                startContent={<SvgIcon name="mage_chart-fill" />}
              >
                Polling
              </Button>
            </div>
            <Button className="w-full md:w-auto bg-[#243C7C] hover:bg-[#2848A5] text-white font-medium h-11 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2 group">
              Publish Now
              <SvgIcon name="material-symbols_send-rounded" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
