"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[160px] bg-gray-50 dark:bg-dark-navy animate-pulse rounded-2xl" />
  ),
});

interface EventSchedulingModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const InputField = ({
  icon,
  label,
  defaultValue,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) => (
  <div className="flex items-center gap-3 px-4 h-[60px] bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl transition-colors">
    <div className="text-[#1BAE7E] flex-shrink-0">{icon}</div>
    <div className="w-[1.5px] self-stretch my-2.5 bg-gray-200 dark:bg-dark-border flex-shrink-0" />
    <div className="flex flex-col justify-center flex-1 min-w-0">
      <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 leading-none mb-1">
        {label}
      </span>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="text-[14px] font-medium text-gray-900 dark:text-gray-100 bg-transparent outline-none border-none w-full placeholder:text-gray-300 leading-tight truncate"
      />
    </div>
  </div>
);

const SelectField = ({
  icon,
  label,
  options,
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}) => (
  <div className="flex items-center gap-3 px-4 h-[60px] bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl transition-colors relative">
    <div className="text-[#1BAE7E] flex-shrink-0">{icon}</div>
    <div className="w-[1.5px] self-stretch my-2.5 bg-gray-200 dark:bg-dark-border flex-shrink-0" />
    <div className="flex flex-col justify-center flex-1 min-w-0 h-full">
      <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 leading-none mb-1">
        {label}
      </span>
      <Select
        placeholder={placeholder}
        variant="flat"
        size="sm"
        classNames={{
          base: "w-full",
          trigger:
            "bg-transparent p-0 h-auto min-h-0 shadow-none hover:bg-transparent",
          value: "text-[14px] font-medium text-gray-900 dark:text-gray-100",
          innerWrapper: "p-0",
          selectorIcon: "text-gray-400",
        }}
        popoverProps={{
          classNames: {
            content:
              "bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border",
          },
        }}
      >
        {options.map((opt) => (
          <SelectItem key={opt.value}>{opt.label}</SelectItem>
        ))}
      </Select>
    </div>
  </div>
);

const TableInsertModal = ({
  isOpen,
  onOpenChange,
  onInsert,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onInsert: (rows: number, cols: number) => void;
}) => {
  const [rows, setRows] = React.useState("3");
  const [cols, setCols] = React.useState("3");

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      classNames={{
        base: "bg-white dark:bg-dark-surface rounded-[24px]",
        header: "border-b border-gray-100 dark:border-dark-border p-5",
        body: "p-5 space-y-4",
        footer: "p-5 pt-0 gap-3 border-t-0",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-[18px] font-bold">
              Insert Table
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-gray-400">
                    Rows
                  </label>
                  <input
                    type="number"
                    value={rows}
                    onChange={(e) => setRows(e.target.value)}
                    className="w-full h-11 px-3 bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl text-[14px] outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-gray-400">
                    Columns
                  </label>
                  <input
                    type="number"
                    value={cols}
                    onChange={(e) => setCols(e.target.value)}
                    className="w-full h-11 px-3 bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl text-[14px] outline-none"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="light"
                onPress={onClose}
                className="font-medium text-gray-500"
              >
                Cancel
              </Button>
              <Button
                className="bg-[#243C7C] text-white font-medium rounded-xl px-6"
                onPress={() => {
                  onInsert(parseInt(rows), parseInt(cols));
                  onClose();
                }}
              >
                Insert
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const LinkInsertModal = ({
  isOpen,
  onOpenChange,
  onInsert,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onInsert: (url: string) => void;
}) => {
  const [url, setUrl] = React.useState("");

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="sm"
      classNames={{
        base: "bg-white dark:bg-dark-surface rounded-[24px]",
        header: "border-b border-gray-100 dark:border-dark-border p-5",
        body: "p-5 space-y-4",
        footer: "p-5 pt-0 gap-3 border-t-0",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-[18px] font-bold">
              Insert Link
            </ModalHeader>
            <ModalBody>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-gray-400">
                  URL
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full h-11 px-3 bg-[#F6F7F9] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl text-[14px] outline-none"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="light"
                onPress={onClose}
                className="font-medium text-gray-500"
              >
                Cancel
              </Button>
              <Button
                className="bg-[#243C7C] text-white font-medium rounded-xl px-6"
                onPress={() => {
                  if (url) {
                    onInsert(url);
                    onClose();
                    setUrl("");
                  }
                }}
              >
                Insert
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const RichTextEditor = () => {
  const [value, setValue] = React.useState("");
  const [showLinkBar, setShowLinkBar] = React.useState(false);
  const [showTableBar, setShowTableBar] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState("");
  const [tableRows, setTableRows] = React.useState("3");
  const [tableCols, setTableCols] = React.useState("3");
  const quillInstanceRef = React.useRef<any>(null);
  const lastRangeRef = React.useRef<any>(null);
  const selectedTextRef = React.useRef<string>("");
  const linkInputRef = React.useRef<HTMLInputElement>(null);

  // Stable setters are guaranteed by React — safe to capture in useMemo([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modules = React.useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline"],
          ["link", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["image", "table"],
        ],
        handlers: {
          table: function (this: any) {
            quillInstanceRef.current = this.quill;
            setShowTableBar((s) => !s);
          },
          link: function (this: any, value: any) {
            const quill = this.quill;
            if (value) {
              const range = quill.getSelection(true);
              quillInstanceRef.current = quill;
              lastRangeRef.current = range;
              selectedTextRef.current =
                range && range.length > 0
                  ? quill.getText(range.index, range.length)
                  : "";
              setShowLinkBar((s) => !s);
              setTimeout(() => linkInputRef.current?.focus(), 30);
            } else {
              quill.format("link", false);
            }
          },
        },
      },
      table: true,
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    [],
  );

  const QUILL_FORMATS = [
    "bold",
    "italic",
    "underline",
    "link",
    "code-block",
    "list",
    "image",
    "table",
  ];

  const applyLink = () => {
    const url = linkUrl.trim();
    if (!url) {
      setShowLinkBar(false);
      setLinkUrl("");
      return;
    }
    const quill = quillInstanceRef.current;
    const range = lastRangeRef.current;
    const text = selectedTextRef.current;
    if (quill) {
      if (range && range.length > 0 && text) {
        quill.deleteText(range.index, range.length);
        quill.insertText(range.index, text, "link", url);
        quill.setSelection(range.index + text.length, 0);
      } else {
        const cursor = range ? range.index : quill.getLength();
        quill.insertText(cursor, url, "link", url);
        quill.setSelection(cursor + url.length, 0);
      }
    }
    setLinkUrl("");
    setShowLinkBar(false);
  };

  const applyTable = () => {
    const quill = quillInstanceRef.current;
    if (quill) {
      const tableModule = quill.getModule("table");
      if (tableModule) {
        tableModule.insertTable(
          parseInt(tableRows) || 3,
          parseInt(tableCols) || 3,
        );
      }
    }
    setShowTableBar(false);
    setTableRows("3");
    setTableCols("3");
  };

  return (
    <div className="quill-premium-container">
      <style jsx global>{`
        .quill-premium-container .ql-toolbar.ql-snow {
          border: 1px solid #f3f4f6;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
          background-color: #ffffff;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .dark .quill-premium-container .ql-toolbar.ql-snow {
          border-color: #2d2d2d;
          background-color: #1a1a1a;
        }
        .quill-premium-container .ql-container.ql-snow {
          border: 1px solid #f3f4f6;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          min-height: 160px;
          font-family: inherit;
        }
        .dark .quill-premium-container .ql-container.ql-snow {
          border-color: #2d2d2d;
        }
        .quill-premium-container .ql-editor {
          min-height: 160px;
          font-size: 13px;
          color: #4b5563;
        }
        .dark .quill-premium-container .ql-editor {
          color: #d1d5db;
        }
        .quill-premium-container .ql-editor.ql-blank::before {
          font-style: normal;
          color: #d1d5db;
          font-size: 13px;
          left: 16px;
        }
        .quill-premium-container .ql-editor a {
          color: #243c7c;
          text-decoration: underline;
          font-weight: 500;
          cursor: pointer;
        }
        .dark .quill-premium-container .ql-editor a {
          color: #60a5fa;
        }
        .quill-premium-container .ql-snow .ql-stroke {
          stroke: #9ca3af;
        }
        .quill-premium-container .ql-snow .ql-fill {
          fill: #9ca3af;
        }
        .quill-premium-container .ql-snow .ql-picker {
          color: #9ca3af;
        }
      `}</style>

      {/* Inline link bar */}
      {showLinkBar && (
        <div className="flex items-center gap-2 px-4 py-2.5 border border-[#243C7C]/20 bg-[#F0F6FE] dark:bg-dark-navy/30 rounded-xl mb-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#243c7c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <input
            ref={linkInputRef}
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") applyLink();
              if (e.key === "Escape") {
                setShowLinkBar(false);
                setLinkUrl("");
              }
            }}
            placeholder="https://example.com"
            className="flex-1 bg-transparent outline-none text-[13px] text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
          />
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              applyLink();
            }}
            className="text-[12px] font-semibold text-white bg-[#243C7C] px-3 py-1 rounded-lg hover:bg-[#1a2d5e] transition-colors"
          >
            Insert
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              setShowLinkBar(false);
              setLinkUrl("");
            }}
            className="text-[12px] font-medium text-gray-400 hover:text-gray-600 px-2 py-1 rounded-lg"
          >
            ✕
          </button>
        </div>
      )}

      {/* Inline table bar */}
      {showTableBar && (
        <div className="flex items-center gap-3 px-4 py-2.5 border border-[#243C7C]/20 bg-[#F0F6FE] dark:bg-dark-navy/30 rounded-xl mb-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#243c7c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <line x1="15" y1="3" x2="15" y2="21" />
          </svg>
          <span className="text-[12px] text-gray-500 flex-shrink-0">Rows</span>
          <input
            type="number"
            value={tableRows}
            onChange={(e) => setTableRows(e.target.value)}
            min="1"
            max="20"
            className="w-14 h-7 px-2 bg-white dark:bg-dark-navy border border-gray-200 dark:border-dark-border rounded-lg text-[13px] outline-none text-center"
          />
          <span className="text-[12px] text-gray-500 flex-shrink-0">Cols</span>
          <input
            type="number"
            value={tableCols}
            onChange={(e) => setTableCols(e.target.value)}
            min="1"
            max="20"
            className="w-14 h-7 px-2 bg-white dark:bg-dark-navy border border-gray-200 dark:border-dark-border rounded-lg text-[13px] outline-none text-center"
          />
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              applyTable();
            }}
            className="text-[12px] font-semibold text-white bg-[#243C7C] px-3 py-1 rounded-lg hover:bg-[#1a2d5e] transition-colors"
          >
            Insert
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              setShowTableBar(false);
            }}
            className="text-[12px] font-medium text-gray-400 hover:text-gray-600 px-2 py-1 rounded-lg"
          >
            ✕
          </button>
        </div>
      )}

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={QUILL_FORMATS}
        placeholder="Enter event description..."
      />
    </div>
  );
};

const EventSchedulingModal: React.FC<EventSchedulingModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        base: "bg-white dark:bg-dark-surface rounded-[20px] overflow-hidden",
        header: "border-b border-gray-100 dark:border-dark-border p-6",
        body: "p-6",
        footer:
          "p-6 flex gap-4 bg-white dark:bg-dark-surface border-t-0 rounded-b-[20px]",
        closeButton:
          "hover:bg-gray-100 dark:hover:bg-dark-navy transition-colors right-4 top-6",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 dark:border-dark-border text-[#243C7C] bg-[#F0F6FE] dark:bg-dark-navy">
                <SvgIcon name="stash_data-date-solid" size={20} />
              </div>
              <h2 className="text-[20px] font-bold text-[#1F2937] dark:text-gray-100">
                Event Scheduling
              </h2>
            </ModalHeader>
            <ModalBody className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Event Title"
                  placeholder="Enter event title"
                  defaultValue="Getting to know the world of cyber security"
                  icon={<SvgIcon name="training_request_course" size={20} />}
                />
                <InputField
                  label="Event Date"
                  placeholder="Select event date"
                  defaultValue="1, March 2026"
                  icon={<SvgIcon name="training_request_date" size={20} />}
                />
                <SelectField
                  label="Event Type"
                  placeholder="Select type"
                  options={[
                    { label: "On Site", value: "onsite" },
                    { label: "Online", value: "online" },
                  ]}
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  }
                />
                <InputField
                  label="Event Location"
                  placeholder="Enter location"
                  defaultValue="Jakarta, Indonesia"
                  icon={<SvgIcon name="training_request_location" size={20} />}
                />
                <SelectField
                  label="Assigned to"
                  placeholder="Select division"
                  options={[
                    { label: "All Division", value: "all" },
                    { label: "IT Division", value: "it" },
                  ]}
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  }
                />
                <InputField
                  label="Link (Optional)"
                  placeholder="Enter meeting link"
                  defaultValue="https://meet.google.com/smz-pskh-wco"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#1F2937] dark:text-gray-100">
                  Event Description
                </label>
                <RichTextEditor />
              </div>
            </ModalBody>
            <ModalFooter className="flex gap-4">
              <Button
                className="flex-1 bg-[#D9EAFF] dark:bg-blue-900/30 text-[#2848A5] dark:text-blue-300 font-medium h-12 rounded-[16px] text-[16px]"
                onPress={onClose}
              >
                Draft
              </Button>
              <Button
                className="flex-1 bg-[#243C7C] text-white font-medium h-12 rounded-[16px] text-[16px]"
                onPress={onClose}
              >
                Submit Now
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EventSchedulingModal;
