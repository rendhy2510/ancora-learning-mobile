"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import SvgIcon from "@/components/shared/SvgIcon";
import { Avatar, Button, Chip, Input, Divider } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const KnowledgeDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const comments = [
    {
      id: 1,
      user: "Ronald Richards",
      avatar: "https://i.pravatar.cc/150?u=ronald",
      time: "10 mins ago",
      department: "Sales Department",
      text: "Great post, John! I've also used dropout and regularization in similar projects. Have you tried using early stopping to prevent overfitting?",
      likes: "3,210",
    },
    {
      id: 2,
      user: "Devon Lane",
      avatar: "https://i.pravatar.cc/150?u=devon",
      time: "10 mins ago",
      department: "Sales Department",
      text: "Thanks for sharing! The data augmentation script is very useful. Could you also share how you prepared the dataset for training?",
      likes: "2,210",
    },
    {
      id: 3,
      user: "Esther Howard",
      avatar: "https://i.pravatar.cc/150?u=esther",
      time: "10 mins ago",
      department: "Sales Department",
      text: "I've faced similar issues with overfitting. Have you tried using transfer learning for better performance?",
      likes: "3,210",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Knowledge Bank"
          breadcrumbs={
            <>
              <Link
                href="/knowledge-bank"
                className="hover:text-[#2848A5] transition-colors"
              >
                Knowledge Bank
              </Link>
              <SvgIcon name="chevron-right" size={14} />
              <span className="text-gray-600 dark:text-gray-300 line-clamp-1 max-w-[300px]">
                How I Solved an AI Model training Issue using neural networks
              </span>
            </>
          }
        />

        <main className="pt-[100px] lg:pt-20 space-y-8 max-w-[1600px] mx-auto">
          {/* Layer 1: bg white */}
          <div className="bg-white dark:bg-dark-surface min-h-screen p-4 lg:p-8">
            {/* Layer 2: bordered container */}
            <div className="border border-gray-100 dark:border-dark-border rounded-[20px] p-4 lg:p-10 dark:bg-dark-navy/10 min-h-screen mb-10">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <div className="space-y-8 max-w-[1100px] mx-auto">
                    <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-lg" />
                    <div className="h-[400px] w-full bg-gray-200 animate-pulse rounded-2xl" />
                    <div className="space-y-4">
                      <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded-lg" />
                      <div className="h-4 w-full bg-gray-200 animate-pulse rounded-lg" />
                      <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded-lg" />
                    </div>
                  </div>
                ) : (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-[1100px] mx-auto space-y-6 lg:space-y-8"
                  >
                    {/* Title & Meta */}
                    <motion.div
                      variants={itemVariants}
                      className="space-y-4 lg:space-y-6"
                    >
                      <h1 className="text-[24px] lg:text-[44px] font-medium text-[#111827] dark:text-white leading-[1.2]">
                        How I Solved an AI Model Training Issue Using Neural
                        Networks
                      </h1>

                      <div className="flex items-center gap-3 lg:gap-4">
                        <Avatar
                          src="https://i.pravatar.cc/150?u=ono"
                          className="w-10 h-10 lg:w-12 lg:h-12"
                        />
                        <div>
                          <div className="flex items-center flex-wrap gap-1.5">
                            <span className="font-bold text-[#111827] dark:text-white text-sm lg:text-base">
                              Ono Shohei
                            </span>
                            <SvgIcon
                              name="material-symbols_verified-rounded"
                              size={14}
                              className="text-[#2848A5] -mt-0.5"
                              useMask
                            />
                            <span className="text-gray-400 text-[11px] lg:text-[13px] ml-0.5 lg:ml-1">
                              2 mins ago
                            </span>
                          </div>
                          <p className="text-gray-500 text-[11px] lg:text-[13px] font-medium">
                            Marketing Department
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner Image */}
                    <motion.div
                      variants={itemVariants}
                      className="relative aspect-[16/9] lg:aspect-[21/9] w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-sm"
                    >
                      <Image
                        src="/dummy/artikel.png"
                        alt="Banner"
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Page Content Layers 3 */}
                    <motion.div
                      variants={itemVariants}
                      className="space-y-6 lg:space-y-8 bg-white dark:bg-dark-surface p-0 lg:p-0 rounded-2xl"
                    >
                      <div className="flex gap-2 lg:gap-3">
                        <Chip
                          variant="flat"
                          radius="sm"
                          className="bg-[#2848A5] text-white px-3 lg:px-4 h-8 lg:h-9 font-medium text-[12px] lg:text-[13px]"
                        >
                          Detail Knowledge
                        </Chip>
                        <Chip
                          variant="flat"
                          radius="sm"
                          className="bg-gray-100 dark:bg-dark-navy text-gray-600 dark:text-gray-400 px-3 lg:px-4 h-8 lg:h-9 font-medium text-[12px] lg:text-[13px]"
                        >
                          Resource
                        </Chip>
                      </div>

                      <div className="prose dark:prose-invert max-w-none space-y-8 lg:space-y-10">
                        <section className="space-y-3 lg:space-y-4">
                          <h2 className="text-[20px] lg:text-[32px] font-medium text-[#111827] dark:text-white">
                            Introduction
                          </h2>
                          <p className="text-[14px] lg:text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed font-geist">
                            As an AI engineer, I often faced the challenge of
                            overfitting during model training. This issue arises
                            when a model learns the training data too well,
                            capturing noise instead of the underlying pattern.
                            Overfitting can lead to poor performance on unseen
                            data, which is a significant concern in machine
                            learning. To tackle this problem, I implemented
                            several strategies that helped mitigate overfitting.
                            One effective approach was to use regularization
                            techniques, such as L1 and L2 regularization. These
                            methods add a penalty to the loss function,
                            discouraging overly complex models and promoting
                            simpler ones that generalize better. Another
                            strategy I employed was data augmentation. By
                            artificially increasing the size of the training
                            dataset through transformations like rotation,
                            scaling, and flipping, I was able to provide the
                            model with more diverse examples. This helped the
                            model learn more robust features and reduced its
                            tendency to overfit. I also experimented with
                            dropout layers in my neural networks. By randomly
                            dropping units during training, I forced the model
                            to learn redundant representations, which improved
                            its ability to generalize. This technique proved to
                            be a game-changer in enhancing the model's
                            performance. In conclusion, addressing overfitting
                            is crucial for developing effective AI models.
                            Through regularization, data augmentation, and
                            dropout, I was able to significantly improve my
                            model's performance. These strategies not only
                            enhanced accuracy on training data but also ensured
                            better results on new, unseen datasets.
                          </p>
                        </section>

                        <section className="space-y-3 lg:space-y-4">
                          <h2 className="text-[20px] lg:text-[32px] font-medium text-[#111827] dark:text-white">
                            Problem
                          </h2>
                          <p className="text-[14px] lg:text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed font-geist">
                            I was developing a deep learning model aimed at
                            image classification. Initially, the model showed
                            impressive performance on the training dataset,
                            which was encouraging. However, I soon realized that
                            it was not generalizing well to unseen data. This
                            discrepancy between training and testing performance
                            raised concerns about overfitting. Essentially, the
                            model had learned the training data too well,
                            capturing noise and specific patterns that did not
                            apply to new images. To address this issue, I plan
                            to implement techniques such as regularization and
                            data augmentation. These strategies should help
                            improve the model's ability to generalize, ensuring
                            it performs better on real-world data.
                          </p>
                        </section>

                        <section className="space-y-3 lg:space-y-4">
                          <h2 className="text-[20px] lg:text-[32px] font-medium text-[#111827] dark:text-white">
                            Solution
                          </h2>
                          <div className="text-[14px] lg:text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed font-geist">
                            To combat overfitting, I implemented the following
                            steps:
                            <ul className="list-disc pl-5 lg:pl-6 mt-2 space-y-2">
                              <li>
                                Data Augmentation: I used techniques like
                                flipping, rotating, and scaling images to create
                                more diverse data.
                              </li>
                              <li>
                                Dropout Layer: I added dropout layers to prevent
                                the network from becoming too reliant on any
                                specific node.
                              </li>
                              <li>
                                Regularization: I used L2 regularization to
                                penalize large weights and force the model to
                                generalize better.
                              </li>
                            </ul>
                          </div>
                        </section>

                        <section className="space-y-3 lg:space-y-4">
                          <h2 className="text-[20px] lg:text-[32px] font-medium text-[#111827] dark:text-white">
                            Results
                          </h2>
                          <p className="text-[14px] lg:text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed font-geist">
                            After implementing these changes, the model's
                            accuracy improved by 12%, and I achieved better
                            performance on unseen data.
                          </p>
                        </section>

                        <section className="space-y-4 lg:space-y-6">
                          <h2 className="text-[20px] lg:text-[32px] font-medium text-[#111827] dark:text-white">
                            Resource
                          </h2>
                          <div className="grid grid-cols-1 gap-3 lg:gap-4">
                            {[
                              {
                                title: "Training Data Augmentation Script",
                                size: "120KB",
                                icon: "solar_document-bold",
                              },
                              {
                                title: "Model Architecture Diagram",
                                size: "120KB",
                                icon: "solar_document-bold",
                              },
                            ].map((res, i) => (
                              <div
                                key={i}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-[16px] border border-gray-100 dark:border-dark-border bg-gray-50/50 dark:bg-dark-navy/20 gap-4"
                              >
                                <div className="flex items-center gap-3 lg:gap-4">
                                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#F0F6FE] dark:bg-dark-surface rounded-xl flex items-center justify-center shadow-sm border border-[#DEEAFB] dark:border-dark-border flex-shrink-0">
                                    <SvgIcon
                                      name={res.icon}
                                      className="text-[#2848A5] w-5 h-5 lg:w-6 lg:h-6"
                                      size={24}
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-[#111827] dark:text-white text-sm lg:text-base">
                                      {res.title}
                                    </h4>
                                    <p className="text-gray-400 text-[10px] lg:text-[12px] uppercase font-medium">
                                      {res.size}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  className="w-full sm:w-auto bg-[#283E81] text-white rounded-lg px-6 h-10 text-xs lg:text-sm"
                                  startContent={
                                    <SvgIcon name="download" size={16} />
                                  }
                                >
                                  Download File
                                </Button>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>

                      {/* Comments Section */}
                      <Divider className="my-6 lg:my-10 bg-[#F6F7F9] dark:bg-dark-border/50" />

                      <div className="space-y-6 lg:space-y-8">
                        {/* Comment Input */}
                        <div className="flex items-center gap-3 lg:gap-4 relative">
                          <Avatar
                            src="https://i.pravatar.cc/150?u=maruyama"
                            className="w-10 h-10 lg:w-12 lg:h-12 shrink-0"
                          />
                          <Input
                            placeholder="Write your comment..."
                            variant="bordered"
                            classNames={{
                              inputWrapper:
                                "h-11 lg:h-14 rounded-xl border-gray-100 dark:border-dark-border bg-gray-50/50 dark:bg-dark-navy/20 px-4 lg:px-6",
                              input: "text-[14px] lg:text-[15px] font-medium",
                            }}
                            endContent={
                              <SvgIcon
                                name="mingcute_emoji-line"
                                className="text-gray-400 cursor-pointer w-4 h-4 lg:w-5 lg:h-5"
                              />
                            }
                          />
                        </div>

                        {/* Comment List */}
                        <div className="space-y-8 lg:space-y-10 pl-0">
                          {comments.map((comment) => (
                            <div
                              key={comment.id}
                              className="flex gap-3 lg:gap-4 group"
                            >
                              <Avatar
                                src={comment.avatar}
                                className="w-10 h-10 lg:w-12 lg:h-12 shrink-0"
                              />
                              <div className="flex-1 space-y-2 lg:space-y-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <h4 className="font-bold text-[#111827] dark:text-white text-sm lg:text-base">
                                        {comment.user}
                                      </h4>
                                      <span className="text-gray-400 text-[10px] lg:text-[12px]">
                                        {comment.time}
                                      </span>
                                    </div>
                                    <p className="text-gray-400 text-[10px] lg:text-[12px] font-medium">
                                      {comment.department}
                                    </p>
                                  </div>
                                  <button className="text-gray-300 hover:text-gray-500 transition-colors border border-gray-100 dark:border-dark-border rounded-lg px-2 py-0.5 mt-1">
                                    <SvgIcon name="more-horizontal" size={12} />
                                  </button>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium text-[13px] lg:text-base">
                                  {comment.text}
                                </p>
                                <div className="flex items-center justify-between pt-1">
                                  <button className="flex items-center gap-2 text-gray-400 group/btn bg-[#FBFBFB] dark:bg-dark-navy/20 h-7 lg:h-8 px-3 lg:px-4 rounded-lg">
                                    <SvgIcon
                                      name="heart"
                                      className="w-4 h-4 lg:w-5 lg:h-5 group-hover/btn:text-red-500 transition-colors"
                                    />
                                    <span className="text-[11px] lg:text-[13px] font-geist font-bold">
                                      {comment.likes} Likes
                                    </span>
                                  </button>
                                  <Button
                                    size="sm"
                                    variant="flat"
                                    className="bg-[#DEEAFB] h-7 lg:h-8 px-3 lg:px-4 rounded-lg flex items-center gap-2 dark:text-gray-500 text-[11px] lg:text-sm font-bold"
                                  >
                                    <SvgIcon
                                      name="message-circle"
                                      size={14}
                                      className="lg:w-4 lg:h-4"
                                    />
                                    Reply
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KnowledgeDetailPage;
