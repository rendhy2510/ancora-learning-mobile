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
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@heroui/react";

const ExternalTrainingProposal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onOpenChange: onDetailOpenChange,
  } = useDisclosure();
  const [selectedProposal, setSelectedProposal] = React.useState<any>(null);

  const handleViewDetails = (proposal: any) => {
    setSelectedProposal(proposal);
    onDetailOpen();
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
      status: "Approved",
    },
    {
      id: 2,
      name: "Effective Communicati...",
      provider: "ABC Academy",
      location: "Jakarta, ID",
      start: "March 2, 2024",
      end: "March 8, 2024",
      cost: "$750",
      status: "Approved",
    },
    {
      id: 3,
      name: "Team Collaboration",
      provider: "LMN College",
      location: "Jakarta, ID",
      start: "March 3, 2024",
      end: "March 9, 2024",
      cost: "$1000",
      status: "Pending",
    },
    {
      id: 4,
      name: "Leadership Essentials",
      provider: "XYZ Institute",
      location: "Jakarta, ID",
      start: "March 1, 2024",
      end: "March 7, 2024",
      cost: "$500",
      status: "Rejected",
    },
  ];

  const InputField = ({
    icon,
    label,
    defaultValue,
    placeholder,
    type,
    readOnly = false,
  }: {
    icon: React.ReactNode;
    label: string;
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    readOnly?: boolean;
  }) => (
    <div className="flex items-center gap-3 px-4 h-[60px] bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl hover:border-gray-200 dark:hover:border-dark-border transition-colors">
      {/* Icon */}
      <div className="text-[#1BAE7E] flex-shrink-0">{icon}</div>
      {/* Divider */}
      <div className="w-[1.5px] self-stretch my-2.5 bg-gray-200 dark:bg-dark-border flex-shrink-0" />
      {/* Label + Value */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 leading-none mb-1">
          {label}
        </span>
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          readOnly={readOnly}
          className="text-[14px] font-medium text-gray-900 dark:text-gray-100 bg-transparent outline-none border-none w-full placeholder:text-gray-300 leading-tight truncate"
        />
      </div>
    </div>
  );

  return (
    <>
      <Card
        shadow="none"
        classNames={{
          base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6",
        }}
      >
        <CardHeader className="flex items-center justify-between px-2 pt-2 pb-2.5 border-b border-gray-100 dark:border-dark-border !w-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-blue-600">
              <SvgIcon name="external_training" />
            </div>
            <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
              External Training Proposal
            </h2>
          </div>
          <Button
            variant="bordered"
            onPress={onOpen}
            className="flex items-center gap-2 text-sm font-medium text-[#2848A5] dark:text-blue-400 bg-white dark:bg-dark-navy border border-gray-200 dark:border-dark-border px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors h-auto"
            startContent={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
          >
            New Request
          </Button>
        </CardHeader>

        <CardBody className="overflow-x-auto p-0">
          <Table
            removeWrapper
            aria-label="External Training Proposal Table"
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
                          row.status === "Approved"
                            ? "bg-[#AEDE78]/10 text-[#558E22] border-[#AEDE78]"
                            : row.status === "Pending"
                              ? "bg-[#FFD748]/10 text-[#D97706] border-[#FFD748]"
                              : "bg-[#FFA1A1]/10 text-[#E62D2D] border-[#FFA1A1]"
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
                      onPress={() => handleViewDetails(row)}
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

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        scrollBehavior="inside"
        classNames={{
          base: "bg-white dark:bg-dark-surface rounded-3xl",
          header: "border-b border-gray-100 dark:border-dark-border p-6",
          body: "p-6",
          footer: "p-6 flex gap-4",
          closeButton:
            "hover:bg-gray-100 dark:hover:bg-dark-navy transition-colors right-4 top-4",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 dark:border-dark-border text-blue-600">
                  <SvgIcon name="lets-icons_form-fill" />
                </div>
                <h2 className="text-[20px] font-bold text-[#1F2937] dark:text-gray-100">
                  Training Request Form
                </h2>
              </ModalHeader>
              <ModalBody className="space-y-6">
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Course Name"
                    defaultValue="Getting to know the world of cyber security"
                    icon={<SvgIcon name="training_request_course" />}
                  />
                  <InputField
                    label="Training Provider"
                    defaultValue="Dicoding"
                    icon={<SvgIcon name="training_request_provider" />}
                  />
                  <InputField
                    label="Location"
                    defaultValue="Jakarta, Indonesia"
                    icon={<SvgIcon name="training_request_location" />}
                  />
                  <InputField
                    label="Start Date"
                    type="date"
                    defaultValue="2026-03-01"
                    icon={<SvgIcon name="training_request_date" />}
                  />
                  <InputField
                    label="End Date"
                    type="date"
                    defaultValue="2026-03-07"
                    icon={<SvgIcon name="training_request_date" />}
                  />
                  <InputField
                    label="Training Fee"
                    defaultValue="$500"
                    icon={<SvgIcon name="training_request_money" />}
                  />
                </div>

                {/* Justification */}
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
                    Justification for Training
                  </label>
                  <div className="relative">
                    <div className="relative">
                      <Textarea
                        placeholder="describe why this training is important for the employee's development and how it will benefit the company"
                        disableAnimation
                        disableAutosize
                        classNames={{
                          input:
                            "text-[13px] outline-none border-none text-gray-500 placeholder:text-gray-300 min-h-[120px] resize-y",
                          inputWrapper:
                            "bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-2xl p-4 shadow-none hover:border-gray-300 dark:hover:border-dark-border transition-colors",
                        }}
                      />
                      <div className="absolute bottom-4 left-4 text-[12px] text-gray-300 font-geist">
                        0/200
                      </div>
                      {/* Resize Icon */}
                      <div className="absolute bottom-4 right-4 pointer-events-none">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-300"
                        >
                          <path
                            d="M1 9L9 1M5 9L9 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload Section */}
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
                    Upload Training Brochure/Details{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="border border-dashed border-gray-200 dark:border-dark-border rounded-2xl p-8 flex flex-col items-center justify-center bg-white dark:bg-dark-navy/10 group cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                    <p className="text-[14px] text-gray-500 dark:text-gray-400">
                      Drag & Drop your files or{" "}
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        Browse
                      </span>
                    </p>
                  </div>
                  <p className="text-[12px] text-gray-400 mt-2">
                    Maximum file size is 100MB
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="flex gap-4">
                <Button
                  className="flex-1 bg-[#D9EAFF] dark:bg-blue-900/30 text-[#2848A5] dark:text-blue-300 font-medium h-12 rounded-2xl"
                  onPress={onClose}
                >
                  Draft
                </Button>
                <Button
                  className="flex-1 bg-[#2848A5] text-white font-medium h-12 rounded-2xl"
                  onPress={onClose}
                >
                  Submit Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Detail Proposal Modal */}
      <Modal
        isOpen={isDetailOpen}
        onOpenChange={onDetailOpenChange}
        size="4xl"
        scrollBehavior="inside"
        classNames={{
          base: "bg-white dark:bg-dark-surface rounded-3xl",
          header: "p-6",
          body: "px-6 pb-6",
          footer: "p-6",
          closeButton:
            "hover:bg-gray-100 dark:hover:bg-dark-navy transition-colors right-4 top-4",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 dark:border-dark-border text-blue-600">
                  <SvgIcon name="solar_document-bold" />
                </div>
                <h2 className="text-[20px] font-bold text-[#1F2937] dark:text-gray-100">
                  Detail Proposal
                </h2>
              </ModalHeader>
              <ModalBody className="space-y-6">
                {/* Status Section */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
                    Status
                  </span>
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-auto py-2 px-6 min-w-[100px] justify-center text-center ${
                        selectedProposal?.status === "Approved"
                          ? "bg-[#AEDE78]/10 text-[#558E22] border-[#AEDE78]"
                          : selectedProposal?.status === "Pending"
                            ? "bg-[#FFD748]/10 text-[#D97706] border-[#FFD748]"
                            : "bg-[#FFA1A1]/10 text-[#E62D2D] border-[#FFA1A1]"
                      }`,
                      content: "text-[12px] font-medium",
                    }}
                  >
                    {selectedProposal?.status}
                  </Chip>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Course Name"
                    defaultValue={selectedProposal?.name}
                    icon={<SvgIcon name="training_request_course" />}
                    readOnly
                  />
                  <InputField
                    label="Training Provider"
                    defaultValue={selectedProposal?.provider}
                    icon={<SvgIcon name="training_request_provider" />}
                    readOnly
                  />
                  <InputField
                    label="Location"
                    defaultValue={selectedProposal?.location}
                    icon={<SvgIcon name="training_request_location" />}
                    readOnly
                  />
                  <InputField
                    label="Start Date"
                    defaultValue={selectedProposal?.start}
                    icon={<SvgIcon name="training_request_date" />}
                    readOnly
                  />
                  <InputField
                    label="End Date"
                    defaultValue={selectedProposal?.end}
                    icon={<SvgIcon name="training_request_date" />}
                    readOnly
                  />
                  <InputField
                    label="Training Fee"
                    defaultValue={selectedProposal?.cost}
                    icon={<SvgIcon name="training_request_money" />}
                    readOnly
                  />
                </div>

                {/* Justification */}
                <div className="space-y-3">
                  <label className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
                    Justification for Training
                  </label>
                  <div className="relative">
                    <div className="bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-2xl p-4 min-h-[140px]">
                      <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        We sincerely hope that this training serves as a
                        powerful catalyst for everyone involved, enabling you to
                        significantly enhance your cyber security skills. By
                        acquiring this valuable knowledge, you will be
                        well-equipped to effectively apply these skills within
                        our company environment, ensuring that we all benefit
                        from a more secure workplace.
                        <br />
                        <br />
                        Moreover, the utilization of these skills will not only
                        safeguard our organization against potential threats but
                        also play a crucial role in fostering a safer digital
                        landscape together. Together, we can create a robust
                        defense against cyber risks. Let's collaborate and
                        actively implement the insights and techniques we've
                        learned throughout this training!
                      </p>
                      <div className="absolute bottom-4 left-4 text-[12px] text-gray-300 font-geist">
                        0/200
                      </div>
                      {/* Resize Icon */}
                      <div className="absolute bottom-4 right-4 pointer-events-none">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-300"
                        >
                          <path
                            d="M1 9L9 1M5 9L9 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attachment Section */}
                <div className="border border-gray-100 dark:border-dark-border rounded-2xl p-4 flex items-center justify-between bg-white dark:bg-dark-surface">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#F0F6FE] dark:bg-blue-900/30 rounded-md border border-[#DEEAFB] flex items-center justify-center text-[#2848A5] dark:text-blue-300">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <SvgIcon name="solar_document-bold" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
                        Training Proposal Submission.pdf
                      </h4>
                      <p className="text-[12px] text-gray-400">2.5mb</p>
                    </div>
                  </div>
                  <Button
                    variant="bordered"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border px-4 py-2 rounded-xl h-auto"
                    startContent={
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    }
                  >
                    Download
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full bg-[#D9EAFF] dark:bg-blue-900/30 font-medium h-12 rounded-2xl"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExternalTrainingProposal;
