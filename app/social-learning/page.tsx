"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card } from "@heroui/react";

// Import custom components
import CreatePost from "@/components/social-learning/CreatePost";
import PostCard from "@/components/social-learning/PostCard";

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

const SocialSkeleton = () => (
  <div className="space-y-8 w-full max-w-none mx-auto">
    {/* Create Post Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
      <div className="flex items-start gap-4">
        <Skeleton
          className="w-12 h-12 rounded-full flex-shrink-0"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <div className="flex-1 space-y-6">
          <Skeleton
            className="h-12 w-full rounded-xl"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-2">
              <Skeleton
                className="h-10 w-24 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-10 w-24 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
            <Skeleton
              className="h-11 w-40 rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        </div>
      </div>
    </Card>

    {/* Post Card Skeleton */}
    {[...Array(2)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
      >
        <div className="flex gap-4">
          <Skeleton
            className="w-12 h-12 rounded-full flex-shrink-0"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <Skeleton
                  className="h-5 w-48 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-4 w-32 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
              <Skeleton
                className="h-9 w-28 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
            <div className="space-y-4">
              <Skeleton
                className="h-20 w-full rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="aspect-[2/1] w-full rounded-2xl"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <div className="flex gap-4">
                <Skeleton
                  className="h-9 w-32 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-9 w-32 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

const SocialLearningPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const posts = [
    {
      id: 1,
      userName: "Ono Shohei",
      avatar: "https://i.pravatar.cc/150?u=ono",
      time: "2 mins ago",
      department: "Marketing Department",
      points: "250,468",
      content:
        "To enhance engagement on social media, I rely on five effective strategies. These methods not only attract attention but also foster meaningful interactions with my audience. First, I focus on creating visually appealing content that resonates with my followers. Additionally, I prioritize responding to comments and messages promptly, ensuring that my audience feels valued and heard.",
      image: "/dummy/artikel.png",
      likes: "5,458",
      comments: "1,092",
      saved: "4,680",
    },
    {
      id: 2,
      userName: "Tanaka Yuki",
      avatar: "https://i.pravatar.cc/150?u=tanaka",
      time: "10 mins ago",
      department: "Sales Department",
      points: "250,468",
      content:
        "In the world of sales, building relationships is key. I utilize a personalized approach to connect with potential clients. By understanding their needs and tailoring my pitch accordingly, I create a strong rapport. Following up consistently is also crucial, as it keeps the conversation alive and shows commitment to their success.",
      image: "/dummy/artikel.png",
      likes: "3,210",
      comments: "567",
      saved: "2,500",
    },
    {
      id: 3,
      userName: "Saito Haruki",
      avatar: "https://i.pravatar.cc/150?u=saito",
      time: "30 mins ago",
      department: "Development Team",
      points: "250,468",
      content:
        "To ensure a smooth workflow in our projects, we adopt Agile methodologies. This approach allows for flexibility and quick adjustments based on feedback. Regular stand-up meetings keep everyone aligned and accountable, while sprint reviews help us celebrate our progress and identify areas for improvement. Team collaboration is crucial to our success.",
      image: "/dummy/artikel.png",
      likes: "4,320",
      comments: "890",
      saved: "3,100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Social Learning"
        />

        <main className="pt-[100px] lg:pt-20 space-y-8 max-w-[1600px] mx-auto">
          {/* Layer 1: bg white no rounded */}
          <div className="bg-white dark:bg-dark-surface p-4 lg:p-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SocialSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-0"
                >
                  {/* Create Post Section */}
                  <motion.div variants={itemVariants}>
                    <CreatePost />
                  </motion.div>

                  {/* Feed Section */}
                  {posts.map((post) => (
                    <motion.div key={post.id} variants={itemVariants}>
                      <PostCard {...post} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SocialLearningPage;
