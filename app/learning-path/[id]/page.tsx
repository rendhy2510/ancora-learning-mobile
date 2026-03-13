"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Avatar,
  Button,
  Chip,
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
  Divider,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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

const CourseDetailPage = () => {
  const params = useParams();
  const id = params?.id || "1";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const syllabus = [
    {
      id: "1",
      title: "Persiapan Belajar",
      description:
        "Modul ini mengenalkan sistem belajar di kelas secara umum mulai dari Persetujuan Hak Cipta, Prasyarat Kemampuan, Prasyarat Tools, Mekanisme Belajar, Forum Diskusi, Glosarium, hingga Daftar Referensi.",
      stats: { articles: 12, videos: 8, assessments: 5, quizzes: 12 },
    },
    {
      id: "2",
      title: "Data untuk AI",
      description:
        "Modul ini menjelaskan hubungan antara data dengan Artificial Intelligence. Selain itu modul ini juga menjelaskan terkait data, tipe-tipe data, kriteria data untuk AI, hingga memberikan gambaran infrastruktur data pada industri.",
      stats: { articles: 18, videos: 5, assessments: 3, quizzes: 12 },
    },
    {
      id: "3",
      title: "Pengantar Machine Learning",
      description:
        "Modul ini menjelaskan dasar-dasar dari Machine Learning yang merupakan salah satu sub-bidang dari Artificial Intelligence. Modul ini akan menjelaskan mulai dari pengenalan Machine Learning, tipe-tipe Machine Learning, proses pembangunan Machine Learning, hingga batasan yang ada pada Machine Learning.",
      stats: { articles: 15, videos: 10, assessments: 2, quizzes: 12 },
    },
    {
      id: "4",
      title: "Deep Learning untuk Semua Orang",
      description:
        "Modul ini mengenalkan sub-bidang AI yaitu Deep Learning serta mengenalkan konsep-konsep dasar pada Deep Learning. Tidak hanya itu, pada modul ini juga akan mengenal Artificial Neural Network, berbagai penerapan Deep Learning, membuat Deep Learning, hingga memaparkan proses Deep Learning bekerja.",
      stats: { articles: 8, videos: 4, assessments: 3, quizzes: 12 },
      items: [
        { title: "Penerapan AI dalam Dunia Nyata", type: "document" },
        { title: "Pengenalan AI", type: "document" },
        { title: "Tantangan Etika dalam AI", type: "document" },
        { title: "Masa Depan AI dan Pekerjaan", type: "video" },
        { title: "AI dalam Kesehatan dan Media", type: "document" },
        { title: "Inovasi AI di Bidang Pendidikan", type: "video" },
      ],
    },
    {
      id: "5",
      title: "Penutup",
      description:
        "Modul ini berisi rangkuman materi kelas, dan ujian akhir untuk menguji pengetahuan yang Anda dapat dalam kelas.",
      stats: { articles: 5, videos: 3, assessments: 5, quizzes: 12 },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Learning Path"
          breadcrumbs={
            <>
              <Link
                href="/learning-path"
                className="hover:text-[#2848A5] transition-colors"
              >
                Learning Path
              </Link>
              <SvgIcon
                name="chevron-right"
                size={12}
                className="text-gray-400"
              />
              <Link
                href="/learning-path"
                className="hover:text-[#2848A5] transition-colors"
              >
                All Course
              </Link>
              <SvgIcon
                name="chevron-right"
                size={12}
                className="text-gray-400"
              />
              <span className="text-gray-600 dark:text-gray-300 line-clamp-1 max-w-[200px] lg:max-w-none">
                Learn the fundamentals of data analysis
              </span>
            </>
          }
        />

        <main className="pt-[80px] lg:pt-[80px] px-4 lg:px-8 pb-20">
          <div className="max-w-[1280px] mx-auto bg-white dark:bg-dark-surface rounded-[24px] border border-gray-100 dark:border-dark-border p-5 lg:p-10 shadow-sm min-h-screen">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <div className="space-y-12 animate-pulse">
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[400px] h-[300px] bg-gray-100 rounded-[20px]" />
                    <div className="flex-1 space-y-4">
                      <div className="h-4 w-20 bg-gray-100 rounded-md" />
                      <div className="h-10 w-3/4 bg-gray-100 rounded-lg" />
                      <div className="h-4 w-full bg-gray-100 rounded-lg" />
                      <div className="h-12 w-40 bg-gray-100 rounded-xl" />
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-12"
                >
                  {/* Hero Layout exactly matching image */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col lg:flex-row gap-8 lg:gap-6"
                  >
                    {/* Left: Preview Image */}
                    <div className="w-full lg:w-[280px] lg:h-[280px] aspect-[4/3] lg:aspect-square relative rounded-[20px] overflow-hidden bg-gray-50 flex-shrink-0">
                      <Image
                        src="/dummy/course_thumbnail.png"
                        alt="Course Preview"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right: Info */}
                    <div className="flex-1 space-y-6 lg:pt-2">
                      <div className="space-y-4">
                        <Chip
                          radius="sm"
                          variant="flat"
                          className="bg-[#DEEAFB] text-[#2848A5] font-bold text-[11px] h-6 px-3"
                        >
                          AI Engineer
                        </Chip>
                        <h1 className="text-[28px] lg:text-[44px] font-medium  text-[#111827] dark:text-white leading-[1.1] tracking-tight">
                          Learn the Fundamentals of Data Analysis
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-[14px] lg:text-[16px] leading-[1.6] font-geist max-w-[850px]">
                          This class provides an understanding of the
                          fundamentals of Artificial Intelligence and its
                          subfields, including Machine Learning and Deep
                          Learning.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 lg:gap-14 pt-2">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src="https://i.pravatar.cc/150?u=adham"
                            className="w-9 h-9 rounded-md"
                          />
                          <span className="font-bold text-[#0F8C66] dark:text-white text-[15px] pb-0.5">
                            Adham Dannaway
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-2">
                            <Avatar
                              src="https://i.pravatar.cc/150?u=1"
                              className="w-8 h-8 border-2 border-white dark:border-dark-border"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/150?u=2"
                              className="w-8 h-8 border-2 border-white dark:border-dark-border"
                            />
                            <Avatar
                              src="https://i.pravatar.cc/150?u=3"
                              className="w-8 h-8 border-2 border-white dark:border-dark-border"
                            />
                          </div>
                          <span className="text-gray-400 text-[13px] font-medium">
                            +24 Student have joined
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <SvgIcon
                            name="ph_medal-military-fill"
                            className="text-[#2848A5] w-6 h-6"
                            useMask
                          />
                          <div className="flex gap-1.5 items-center">
                            <span className="text-gray-400 text-[13px] font-medium">
                              Level
                            </span>
                            <span className="text-[#00A389] font-bold text-[14px]">
                              Beginner
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/learning-path/${id}/learn`}
                          className="w-full lg:w-auto"
                        >
                          <Button className="bg-[#2848A5] text-white px-10 h-14 rounded-[14px] font-medium text-[16px] hover:bg-[#1e367a] shadow-lg shadow-[#2848A5]/10 w-full lg:w-auto">
                            Join Class Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tabs Section */}
                  <motion.div variants={itemVariants} className="pt-4">
                    <Tabs
                      variant="light"
                      classNames={{
                        base: "w-full",
                        tabList: "gap-4 p-0 bg-transparent relative",
                        tab: "px-8 h-12 rounded-lg bg-[#FBFBFB] dark:bg-dark-navy/40 data-[selected=true]:bg-[#2848A5] dark:data-[selected=true]:bg-[#2848A5] transition-colors",
                        tabContent:
                          "group-data-[selected=true]:text-white font-medium text-[15px] text-gray-500",
                      }}
                    >
                      <Tab key="description" title="Class Description">
                        <div className="pt-10 space-y-12">
                          <section className="space-y-6">
                            <h2 className="text-[28px] lg:text-[36px] font-medium text-[#111827] dark:text-white tracking-tight">
                              Deskripsi
                            </h2>
                            <div className="text-gray-500 dark:text-gray-400 text-[15px] lg:text-[16px] leading-[1.8] font-geist space-y-6">
                              <p className="max-w-[1100px]">
                                Artificial Intelligence is a technology that
                                involves mimicking human behavior by utilizing
                                machines to learn from provided data and perform
                                tasks without explicit instructions on the
                                desired output. AI encompasses several
                                subfields, such as Machine Learning, Deep
                                Learning, Generative AI, and more. In this
                                class, you will learn from an introduction to AI
                                to creating AI models and their applications.
                              </p>
                              <ul className="space-y-4 pl-1">
                                {[
                                  "Kelas ini memberikan pemahaman dasar tentang Artificial Intelligence mulai dari pengertiannya hingga penerapan nya pada dunia nyata.",
                                  "Kebutuhan industri yang semakin banyak mengenai pembuatan sistem berbasis Artificial Intelligence.",
                                  "Artificial Intelligence dapat diimplementasikan ke berbagai industri and berbagai jenis data sehingga kegunaannya sangat luas.",
                                  "Kelas ini memberikan pengetahuan untuk pembuatan Artificial Intelligence dengan mudah agar semua orang dapat membuat dan menggunakannya.",
                                  "Pemahaman tentang Artificial Intelligence dapat dipelajari oleh semua orang.",
                                ].map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex gap-4 items-start"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-white mt-[10px] flex-shrink-0" />
                                    <span className="max-w-[900px]">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </section>
                        </div>
                      </Tab>
                      <Tab key="syllabus" title="Class Syllabus">
                        <div className="pt-10 space-y-8">
                          <section className="space-y-6">
                            <div className="space-y-1.5">
                              <h2 className="text-[28px] lg:text-[36px] font-medium text-[#111827] dark:text-white tracking-tight">
                                Class Syllabus
                              </h2>
                              <p className="text-gray-400 text-[15px] font-medium">
                                Materi yang akan Anda pelajari pada kelas ini.
                              </p>
                            </div>

                            <Accordion
                              variant="splitted"
                              selectionMode="multiple"
                              defaultExpandedKeys={["4"]}
                              className="px-0 gap-5"
                              itemClasses={{
                                base: "group border border-gray-100 dark:border-dark-border !bg-white dark:!bg-dark-surface rounded-[20px] px-6 lg:px-8 shadow-sm transition-all hover:bg-gray-50/30",
                                title:
                                  "font-medium text-[18px] lg:text-[20px] text-[#111827] dark:text-white group-data-[open=true]:text-[#2848A5]",
                                trigger: "py-6",
                                content: "pb-10 pt-2",
                              }}
                            >
                              {syllabus.map((module) => (
                                <AccordionItem
                                  key={module.id}
                                  title={module.title}
                                  indicator={
                                    <SvgIcon
                                      name="ri_arrow-up-s-line"
                                      className="text-[#00A389] transition-transform group-data-[open=true]:rotate-180"
                                    />
                                  }
                                >
                                  <div className="space-y-8">
                                    <p className="text-[14px] lg:text-[15px] leading-relaxed font-geist text-gray-400 max-w-[1000px]">
                                      {module.description}
                                    </p>

                                    <div className="inline-flex flex-wrap items-center bg-[#F8F9FB] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-[14px] p-1.5 shadow-sm">
                                      {[
                                        {
                                          icon: "article_docx",
                                          label: `${module.stats.articles} Article`,
                                        },
                                        {
                                          icon: "mynaui_video-solid",
                                          label: `${module.stats.videos} Videos`,
                                        },
                                        {
                                          icon: "healthicons_i-exam-multiple-choice",
                                          label: `${module.stats.assessments} Assessment`,
                                        },
                                        {
                                          icon: "knowledge_assessment",
                                          label: `${module.stats.quizzes} Quiz`,
                                        },
                                      ].map((stat, i, arr) => (
                                        <React.Fragment key={i}>
                                          <div className="flex items-center gap-1 px-4 py-1">
                                            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0">
                                              <SvgIcon
                                                name={stat.icon}
                                                className="text-[#424E62] dark:text-white"
                                                size={24}
                                                useMask
                                              />
                                            </div>
                                            <span className="text-[14px] font-medium text-[#1E293B] dark:text-white whitespace-nowrap">
                                              {stat.label}
                                            </span>
                                          </div>
                                          {i < arr.length - 1 && (
                                            <div className="hidden lg:block w-px h-6 bg-gray-200 dark:bg-dark-border" />
                                          )}
                                        </React.Fragment>
                                      ))}
                                    </div>

                                    {/* Divider horizontal */}
                                    <Divider className="bg-[#ECEEF2] dark:bg-dark-border" />

                                    {module.id === "4" && module.items && (
                                      <div className="grid grid-cols-1 gap-3">
                                        {module.items.map((item, i) => (
                                          <div
                                            key={i}
                                            className="flex items-center gap-1 p-4 rounded-xl border border-gray-50 dark:border-dark-border bg-white dark:bg-dark-navy/20 hover:border-[#2848A5]/30 transition-all cursor-pointer group/sub"
                                          >
                                            <div className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 group-hover/sub:bg-[#2848A5] group-hover/sub:text-white transition-colors">
                                              <SvgIcon
                                                name={
                                                  item.type === "video"
                                                    ? "majesticons_video"
                                                    : "solar_document-bold"
                                                }
                                                size={24}
                                                className="text-[#2848A5] group-hover/sub:text-white"
                                                useMask
                                              />
                                            </div>
                                            <span className="text-[15px] font-bold text-[#111827] dark:text-white group-hover/sub:text-[#2848A5] transition-colors font-geist">
                                              {item.title}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </section>
                        </div>
                      </Tab>
                    </Tabs>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseDetailPage;
