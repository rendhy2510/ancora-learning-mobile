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
  Button,
} from "@heroui/react";

interface AttendanceRecord {
  id: number;
  no: string;
  courseName: string;
  sessionDate: string;
  totalParticipants: number;
  present: number;
  absent: number;
}

interface AttendanceTableProps {
  title: string;
  data: AttendanceRecord[];
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({ title, data }) => {
  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6 shadow-sm",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto h-auto min-h-0 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="prime_list-check" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            {title}
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardBody className="p-0 overflow-x-auto">
        <Table
          removeWrapper
          aria-label={`${title} Table`}
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none py-4",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Course Name</TableColumn>
            <TableColumn>Session Date</TableColumn>
            <TableColumn className="text-center">
              Total Participants
            </TableColumn>
            <TableColumn className="text-center">Present</TableColumn>
            <TableColumn className="text-center">Absent</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[16px] font-geist">
                  {row.no}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px] max-w-[250px]">
                  {row.courseName}
                </TableCell>
                <TableCell className="font-geist">{row.sessionDate}</TableCell>
                <TableCell className="text-center font-geist">
                  {row.totalParticipants}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.present}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.absent}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="light"
                    size="sm"
                    className="flex items-center gap-1.5 px-3 min-w-0 rounded-lg border border-[#D5DBE2] dark:border-dark-border bg-[#F6F7F9] dark:bg-dark-navy mx-auto h-9"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <SvgIcon name="eye" size={14} />
                    </div>
                    <span className="text-[14px] font-medium">Detail</span>
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

export default AttendanceTable;
