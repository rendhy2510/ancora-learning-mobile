"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ExternalTrainingProgress = () => {
  const router = useRouter();

  const handleViewDetails = (id: number) => {
    router.push(`/learning-progress/${id}`);
  };

  const data = [
    {
      id: 1,
      name: "Leadership Essentials",
      provider: "XYZ Institute",
      location: "Jakarta, ID",
      start: "March 1, 2024",
      end: "March 7, 2024",
      cost: "$500",
      status: "Completed",
    },
    {
      id: 2,
      name: "Effective Communicati...",
      provider: "ABC Academy",
      location: "Jakarta, ID",
      start: "March 2, 2024",
      end: "March 8, 2024",
      cost: "$750",
      status: "Completed",
    },
    {
      id: 3,
      name: "Team Collaboration",
      provider: "LMN College",
      location: "Jakarta, ID",
      start: "March 3, 2024",
      end: "March 9, 2024",
      cost: "$1000",
      status: "On Going",
    },
    {
      id: 4,
      name: "Leadership Essentials",
      provider: "XYZ Institute",
      location: "Jakarta, ID",
      start: "March 1, 2024",
      end: "March 7, 2024",
      cost: "$500",
      status: "Completed",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6",
      }}
    >
      <CardHeader className="flex items-center justify-between px-2 pt-2 pb-2.5 border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-indigo-600">
            <SvgIcon name="external_training" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            External Training Progress
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </CardHeader>

      <CardBody className="overflow-x-auto p-0">
        <Table
          removeWrapper
          aria-label="External Training Progress Table"
          classNames={{
            th: "py-3 px-4 text-[13px] font-bold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "py-4 px-4 text-[13px] text-gray-600 dark:text-gray-400 font-medium",
            tr: "border-b border-gray-50 dark:border-dark-border/50 hover:bg-gray-50/50 dark:hover:bg-dark-navy/50 group",
          }}
        >
          <TableHeader>
            <TableColumn>Name Training</TableColumn>
            <TableColumn>Provider</TableColumn>
            <TableColumn>Location</TableColumn>
            <TableColumn>Start Date</TableColumn>
            <TableColumn>End Date</TableColumn>
            <TableColumn>Cost</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                  {row.name}
                </TableCell>
                <TableCell>{row.provider}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell className="font-geist tracking-wide">
                  {row.start}
                </TableCell>
                <TableCell className="font-geist tracking-wide">
                  {row.end}
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-gray-200 font-geist">
                  {row.cost}
                </TableCell>
                <TableCell>
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-auto py-2 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "Completed"
                          ? "bg-[#AEDE78]/10 text-[#558E22] border-[#AEDE78]"
                          : "bg-[#FFD748]/10 text-[#D97706] border-[#FFD748]"
                      }`,
                      content: "text-[11px] font-medium",
                    }}
                  >
                    {row.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <Button
                    variant="light"
                    className="flex items-center gap-1.5 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-dark-border rounded-lg min-w-0 mx-auto"
                    disableRipple
                    startContent={<SvgIcon name="eye" />}
                    onPress={() => handleViewDetails(row.id)}
                  >
                    View Details
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

export default ExternalTrainingProgress;
