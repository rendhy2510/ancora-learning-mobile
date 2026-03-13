import React from "react";
import DashboardStats from "@/components/dashboards/user/DashboardStats";
import RecentActivity from "@/components/dashboards/user/RecentActivity";
import ProgressCourse from "@/components/dashboards/user/ProgressCourse";
import Schedule from "@/components/dashboards/user/Schedule";
import MyCourse from "@/components/dashboards/user/MyCourse";
import ExternalTrainingApproval from "@/components/shared/ExternalTrainingApproval";
import ExternalTrainingProgress from "@/components/shared/ExternalTrainingProgress";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card, CardBody } from "@heroui/react";

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

const DashboardSkeleton = () => (
  <div className="space-y-6">
    {/* Stats Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <Skeleton
                className="h-4 w-20 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-8 w-16 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
            <Skeleton
              className="w-12 h-12 rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        </Card>
      ))}
    </div>

    {/* Row 2 Skeleton */}
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">
      {/* Recent Activity Skeleton */}
      <Card className="lg:col-span-3 border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
        <Skeleton
          className="h-7 w-40 mb-6 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton
                className="w-10 h-10 rounded-full flex-shrink-0"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <div className="space-y-2 flex-1 pt-1">
                <Skeleton
                  className="h-4 w-full rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-3 w-2/3 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Progress Course Skeleton */}
      <Card className="lg:col-span-5 border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
        <div className="flex justify-between mb-8">
          <Skeleton
            className="h-7 w-48 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <Skeleton
            className="h-7 w-20 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        </div>
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <Skeleton
                    className="h-5 w-64 rounded-lg"
                    classNames={{ base: "dark:bg-dark-border/30" }}
                  />
                  <Skeleton
                    className="h-4 w-32 rounded-lg"
                    classNames={{ base: "dark:bg-dark-border/30" }}
                  />
                </div>
                <Skeleton
                  className="h-5 w-12 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
              <Skeleton
                className="h-3 w-full rounded-full"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>

    {/* Schedule Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
      <div className="flex justify-between items-center mb-6">
        <Skeleton
          className="h-7 w-32 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <div className="flex gap-2">
          <Skeleton
            className="w-10 h-10 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <Skeleton
            className="w-10 h-10 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-50 dark:border-dark-border/50 rounded-xl p-4 space-y-3"
          >
            <Skeleton
              className="h-4 w-24 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-6 w-full rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <div className="flex gap-2 items-center">
              <Skeleton
                className="w-4 h-4 rounded-full"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-3 w-32 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>

    {/* Table Skeletons */}
    {[...Array(2)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
      >
        <div className="p-6 border-b border-gray-50 dark:border-dark-border/50">
          <Skeleton
            className="h-7 w-48 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        </div>
        <div className="p-6 space-y-4">
          {[...Array(3)].map((_, j) => (
            <Skeleton
              key={j}
              className="h-14 w-full rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          ))}
        </div>
      </Card>
    ))}

    {/* My Course Grid Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-[24px] bg-white dark:bg-dark-surface p-0 overflow-hidden shadow-none"
        >
          <Skeleton
            className="aspect-[16/9] w-full"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <CardBody className="p-5 space-y-4">
            <Skeleton
              className="h-6 w-3/4 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-4 w-full rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <div className="flex gap-4 pt-4">
              <Skeleton
                className="h-4 w-20 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-20 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </div>
);

export default function UserDashboard() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DashboardSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-6">
            <DashboardStats />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mb-6">
            {/* Recent Activity - Takes 1.5 units (3/8) */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <RecentActivity />
            </motion.div>

            {/* Progress Course - Takes 2.5 units (5/8) */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <ProgressCourse />
            </motion.div>
          </div>

          {/* Schedule - Full Width */}
          <motion.div variants={itemVariants} className="mb-6">
            <Schedule />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <ExternalTrainingApproval />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <ExternalTrainingProgress />
          </motion.div>

          {/* My Course Section */}
          <motion.div variants={itemVariants}>
            <MyCourse />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
