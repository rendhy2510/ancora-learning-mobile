"use client";

import React, { useState } from "react";
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
  Avatar,
  Chip,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Select,
  SelectItem,
} from "@heroui/react";

interface UserRecord {
  id: number;
  no: string;
  name: string;
  email: string;
  role: string;
  department: string;
  company: string;
  status: string;
  avatar: string;
}

interface UserTableProps {
  title: string;
  data: UserRecord[];
}

const companies = ["PT. XYZ", "Ancora Learning", "Ancora Logistics"];
const departmentsByCompany: Record<string, string[]> = {
  "PT. XYZ": [
    "Executive",
    "Human Capital",
    "Operations",
    "Finance",
    "IT Support",
    "Marketing",
  ],
  "Ancora Learning": ["Academic", "Training"],
  "Ancora Logistics": ["Fleet", "Warehouse"],
};
const roles = ["User", "HC", "Leader", "BOD"];
const statuses = ["Active", "Inactive"];

const UserTable: React.FC<UserTableProps> = ({ title, data }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedDept, setSelectedDept] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleReset = () => {
    setSelectedCompany("");
    setSelectedDept("");
    setSelectedRole("");
    setSelectedStatus("");
  };

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6 shadow-sm",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto h-auto min-h-0 py-3 px-3 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="solar_user-bold" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <Input
            placeholder="Search users..."
            variant="bordered"
            radius="lg"
            size="sm"
            className="w-full md:w-64 max-w-full h-10"
            startContent={
              <SvgIcon name="search" size={18} className="text-gray-400" />
            }
            classNames={{
              inputWrapper:
                "border-gray-100 dark:border-dark-border hover:border-gray-200 transition-colors h-10",
            }}
          />

          <Popover placement="bottom-end" shadow="lg" radius="lg">
            <PopoverTrigger>
              <Button
                variant="light"
                size="sm"
                className="flex items-center gap-2 h-10 px-4 rounded-xl border border-gray-100 dark:border-dark-border text-gray-500 font-medium bg-gray-50/50 dark:bg-dark-navy/30"
                startContent={
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
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                }
              >
                Filters
                {(selectedCompany || selectedRole || selectedStatus) && (
                  <div className="w-2 h-2 rounded-full bg-[#2848A5]" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <div className="w-80 p-6 space-y-5 bg-white dark:bg-dark-surface rounded-2xl border border-gray-100 dark:border-dark-border shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[16px] text-gray-900 dark:text-white">
                    Filter Options
                  </h3>
                  <Button
                    variant="light"
                    size="sm"
                    className="text-red-600 font-bold"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>

                <Select
                  label="Perusahaan"
                  placeholder="Select Company"
                  variant="bordered"
                  radius="lg"
                  size="sm"
                  selectedKeys={selectedCompany ? [selectedCompany] : []}
                  onSelectionChange={(keys) => {
                    const val = Array.from(keys)[0] as string;
                    setSelectedCompany(val);
                    setSelectedDept(""); // Reset dept on company change
                  }}
                >
                  {companies.map((c) => (
                    <SelectItem key={c}>{c}</SelectItem>
                  ))}
                </Select>

                <Select
                  label="Departemen"
                  placeholder={
                    selectedCompany
                      ? "Select Department"
                      : "Select company first"
                  }
                  variant="bordered"
                  radius="lg"
                  size="sm"
                  isDisabled={!selectedCompany}
                  selectedKeys={selectedDept ? [selectedDept] : []}
                  onSelectionChange={(keys) =>
                    setSelectedDept(Array.from(keys)[0] as string)
                  }
                >
                  {(departmentsByCompany[selectedCompany] || []).map((d) => (
                    <SelectItem key={d}>{d}</SelectItem>
                  ))}
                </Select>

                <Select
                  label="Role"
                  placeholder="Select Role"
                  variant="bordered"
                  radius="lg"
                  size="sm"
                  selectedKeys={selectedRole ? [selectedRole] : []}
                  onSelectionChange={(keys) =>
                    setSelectedRole(Array.from(keys)[0] as string)
                  }
                >
                  {roles.map((r) => (
                    <SelectItem key={r}>{r}</SelectItem>
                  ))}
                </Select>

                <Select
                  label="Status"
                  placeholder="Select Status"
                  variant="bordered"
                  radius="lg"
                  size="sm"
                  selectedKeys={selectedStatus ? [selectedStatus] : []}
                  onSelectionChange={(keys) =>
                    setSelectedStatus(Array.from(keys)[0] as string)
                  }
                >
                  {statuses.map((s) => (
                    <SelectItem key={s}>{s}</SelectItem>
                  ))}
                </Select>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            isIconOnly
            variant="light"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-10 h-10 rounded-lg border border-gray-100 dark:border-dark-border"
          >
            <SvgIcon name="more-horizontal" className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardBody className="p-0 overflow-x-auto">
        <Table
          removeWrapper
          aria-label={`${title} Table`}
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none py-4 px-6",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 px-6 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>User Info</TableColumn>
            <TableColumn>Department</TableColumn>
            <TableColumn>Company</TableColumn>
            <TableColumn className="text-center">Role</TableColumn>
            <TableColumn className="text-center">Status</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[16px] font-geist">
                  {row.no}
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar src={row.avatar} size="md" radius="lg" />
                    <div>
                      <p className="text-[15px] font-medium text-gray-900 dark:text-gray-100 leading-tight">
                        {row.name}
                      </p>
                      <p className="text-[12px] text-gray-500 font-medium">
                        {row.email}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200">
                  {row.department}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200">
                  {row.company}
                </TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="flat"
                    size="sm"
                    className="font-bold border border-transparent bg-[#F0F4FF] text-[#2848A5] h-7"
                  >
                    {row.role}
                  </Chip>
                </TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="flat"
                    size="sm"
                    className={`font-bold h-7 ${row.status === "Active" ? "bg-[#D4F7E5] text-[#0F8C66]" : "bg-[#FFE1E1] text-[#E62D2D]"}`}
                  >
                    {row.status}
                  </Chip>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="light"
                      size="sm"
                      className="flex items-center gap-1.5 px-3 min-w-0 rounded-lg border border-[#D5DBE2] dark:border-dark-border bg-[#F6F7F9] dark:bg-dark-navy h-9"
                    >
                      <div className="w-6 h-6 flex items-center justify-center text-[#2848A5]">
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
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </div>
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      className="flex items-center gap-1.5 px-3 min-w-0 rounded-lg border border-[#FFE1E1] bg-[#FFF5F5] h-9 text-[#E62D2D]"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
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
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                      </div>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default UserTable;
