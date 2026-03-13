"use client";

import React from "react";
import {
  Card,
  CardHeader,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";

const trainingCosts = [
  {
    no: "01",
    course: "Digital Marketing 101",
    participants: 120,
    cost: "$60,000",
    completion: "85%",
    type: "Online Course",
  },
  {
    no: "02",
    course: "Leadership Essentials",
    participants: 150,
    cost: "$75,000",
    completion: "90%",
    type: "In-Class Workshop",
  },
  {
    no: "03",
    course: "Cybersecurity Basics",
    participants: 180,
    cost: "$90,000",
    completion: "95%",
    type: "Hybrid (Online/In-Class)",
  },
  {
    no: "04",
    course: "Advanced Excel for Finance",
    participants: 120,
    cost: "$60,000",
    completion: "85%",
    type: "In-Class Workshop",
  },
];

const HcTrainingCostTable = () => {
  return (
    <Card
      shadow="none"
      className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-0 overflow-hidden font-geist"
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="healthicons_money-bag" size={20} />
          </div>
          <h2 className="text-[17px] md:text-[18px] font-semibold text-[#1F2937] dark:text-gray-100">
            Training Cost
          </h2>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              className="text-gray-400 border border-gray-100 dark:border-dark-border rounded-lg h-9 w-9"
            >
              <SvgIcon name="more-horizontal" size={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Actions">
            <DropdownItem key="view">View Details</DropdownItem>
            <DropdownItem key="export">Export Data</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>

      {/* Mobile Card View (shown only on small screens) */}
      <div className="md:hidden divide-y divide-gray-50 dark:divide-dark-border/30">
        {trainingCosts.map((item) => (
          <div key={item.no} className="p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-[#2848A5] uppercase tracking-wider">
                  No. {item.no}
                </p>
                <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-tight">
                  {item.course}
                </h3>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 font-medium">
                  {item.type}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[16px] font-bold text-[#2848A5]">
                  {item.cost}
                </p>
                <p className="text-[11px] text-gray-400 font-medium">
                  Total Cost
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-dark-border/20">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[13px] font-bold text-gray-900 dark:text-white">
                    {item.participants}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    Participants
                  </p>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#1BAE7E]">
                    {item.completion}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    Completion
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="light"
                className="text-[#2848A5] font-bold text-[12px] h-8 px-2 min-w-0"
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View (hidden on mobile, shown on md and up) */}
      <div className="hidden md:block">
        <Table
          aria-label="Training Cost"
          removeWrapper
          classNames={{
            th: "bg-[#FAFAFA] dark:bg-dark-navy text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-dark-border font-bold text-[14px] py-4 first:rounded-none last:rounded-none",
            td: "py-5 text-gray-900 dark:text-gray-100 text-[14px] border-b border-gray-50 dark:border-dark-border/30",
            tr: "hover:bg-gray-50/50 dark:hover:bg-dark-navy/30 transition-colors",
          }}
        >
          <TableHeader>
            <TableColumn width={80} align="start">
              No.
            </TableColumn>
            <TableColumn align="start">Course Name</TableColumn>
            <TableColumn align="center">Total Participants</TableColumn>
            <TableColumn align="center">Total Training Cost</TableColumn>
            <TableColumn align="center">Completion Rate</TableColumn>
            <TableColumn align="center">Training Type</TableColumn>
          </TableHeader>
          <TableBody>
            {trainingCosts.map((item) => (
              <TableRow key={item.no}>
                <TableCell className="font-medium text-gray-400 underline decoration-dotted decoration-[#2848A5]/30 underline-offset-4">
                  {item.no}
                </TableCell>
                <TableCell className="font-bold">{item.course}</TableCell>
                <TableCell>{item.participants}</TableCell>
                <TableCell className="font-bold text-[#2848A5]">
                  {item.cost}
                </TableCell>
                <TableCell className="font-bold text-[#1BAE7E]">
                  {item.completion}
                </TableCell>
                <TableCell className="text-gray-500">{item.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default HcTrainingCostTable;
