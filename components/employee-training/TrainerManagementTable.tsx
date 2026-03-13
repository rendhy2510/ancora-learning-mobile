"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
} from "@heroui/react";

const TrainerManagementTable = () => {
  const data = [
    {
      id: 1,
      no: "01",
      name: "Kristin Watson",
      specialization: "AI Engineering, Machine Learning",
      session: "March 5, 2024",
      photo: "https://i.pravatar.cc/150?u=kristin",
    },
    {
      id: 2,
      no: "02",
      name: "Bessie Cooper",
      specialization: "Data Science, Analytics",
      session: "March 6, 2024",
      photo: "https://i.pravatar.cc/150?u=bessie",
    },
    {
      id: 3,
      no: "03",
      name: "Ronald Richards",
      specialization: "Cloud Computing, DevOps",
      session: "March 7, 2024",
      photo: "https://i.pravatar.cc/150?u=ronald",
    },
    {
      id: 4,
      no: "04",
      name: "Kathryn Murphy",
      specialization: "AI Engineering, Machine Learning",
      session: "March 5, 2024",
      photo: "https://i.pravatar.cc/150?u=kathryn",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6 shadow-sm",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="fa7-solid_mortar-board" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Trainer Management
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="light"
            size="sm"
            className="text-[#243C7C] font-semibold border border-divider hover:bg-gray-50 flex items-center gap-1.5 h-8 px-3 dark:text-gray-100"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add New
          </Button>
          <Button
            variant="light"
            size="sm"
            className="text-[#243C7C] font-semibold border border-divider hover:bg-gray-50 flex items-center gap-1.5 h-8 px-3 dark:text-gray-100"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            View All
          </Button>
        </div>
      </CardHeader>

      <CardBody className="p-0 overflow-x-auto">
        <Table
          removeWrapper
          aria-label="Trainer Management Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium py-3 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Photo</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Specialization</TableColumn>
            <TableColumn>Training Session</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[16px] font-geist">
                  {row.no}
                </TableCell>
                <TableCell>
                  <Avatar
                    src={row.photo}
                    size="md"
                    className="rounded-lg shadow-sm"
                  />
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px]">
                  {row.name}
                </TableCell>
                <TableCell>{row.specialization}</TableCell>
                <TableCell className="font-geist">{row.session}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="light"
                    size="sm"
                    className="flex items-center gap-1 px-3 min-w-0 rounded-lg border border-[#D5DBE2] dark:border-dark-border bg-[#F6F7F9] dark:bg-dark-navy mx-auto"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <SvgIcon name="eye" size={14} />
                    </div>
                    <span className="text-[14px] font-medium">Profile</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TrainerManagementTable;
