"use client";

import React, { useRef, useState } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";

interface FileUploadProps {
  label?: string;
  accept?: string;
  maxSizeMB?: number;
  value: File | null;
  onChange: (file: File | null) => void;
  placeholder?: string;
  className?: string;
  helperText?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = "*/*",
  maxSizeMB = 100,
  value,
  onChange,
  placeholder = "Drag & Drop your files or",
  className = "",
  helperText,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-[14px] font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
          id="file-upload-input"
        />
        <label
          htmlFor="file-upload-input"
          className="block w-full cursor-pointer"
        >
          <Card
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            className={`h-[180px] rounded-[20px] border-2 border-dashed bg-white dark:bg-dark-navy/20 shadow-none transition-all overflow-hidden ${
              isDragging
                ? "border-[#2848A5] bg-blue-50/10"
                : "border-gray-100 dark:border-dark-border"
            } hover:border-[#2848A5]/30`}
          >
            <CardBody className="flex flex-col items-center justify-center p-0 h-full relative pointer-events-none">
              {value ? (
                <div className="flex flex-col items-center gap-3 p-4 text-center pointer-events-auto">
                  <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px] font-medium text-gray-900 dark:text-white truncate max-w-[200px]">
                      {value.name}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {(value.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="light"
                    className="text-red-500 text-[12px] h-8 relative z-10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onChange(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                  >
                    Remove file
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2 text-[15px] text-gray-500">
                    <span>{placeholder}</span>
                    <span className="text-[#2848A5] font-medium hover:underline">
                      Browse
                    </span>
                  </div>
                  <p className="absolute bottom-4 left-4 text-[11px] text-gray-400 uppercase tracking-wider">
                    Max size {maxSizeMB}mb
                  </p>
                </div>
              )}
            </CardBody>
          </Card>
        </label>
      </div>
      {helperText && (
        <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
