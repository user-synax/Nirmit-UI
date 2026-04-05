"use client";

import { cn } from "@repo/utils";
import { Upload, X, File, CheckCircle2, AlertCircle } from "lucide-react";
import {
  useState,
  useRef,
  useCallback,
  DragEvent,
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface FileUploadFile {
  file: File;
  id: string;
  progress: number;
  status: "uploading" | "complete" | "error";
}

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  onFilesChange?: (files: FileUploadFile[]) => void;
  className?: string;
  disabled?: boolean;
}

export interface FileUploadRef {
  clearFiles: () => void;
}

export const FileUpload = forwardRef<FileUploadRef, FileUploadProps>(
  (
    {
      accept,
      multiple = true,
      maxSize = 10 * 1024 * 1024,
      maxFiles = 5,
      onFilesChange,
      className,
      disabled,
    },
    ref,
  ) => {
    const [files, setFiles] = useState<FileUploadFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      clearFiles: () => {
        setFiles([]);
        onFilesChange?.([]);
      },
    }));

    const generateId = () => Math.random().toString(36).substring(2, 9);

    const processFiles = useCallback(
      (fileList: FileList | File[]) => {
        const newFiles: FileUploadFile[] = [];

        for (const file of Array.from(fileList)) {
          if (files.length + newFiles.length >= maxFiles) break;
          if (file.size > maxSize) {
            newFiles.push({
              file,
              id: generateId(),
              progress: 0,
              status: "error",
            });
            continue;
          }

          newFiles.push({
            file,
            id: generateId(),
            progress: 0,
            status: "uploading",
          });
        }

        const updatedFiles = [...files, ...newFiles];
        setFiles(updatedFiles);
        onFilesChange?.(updatedFiles);
      },
      [files, maxFiles, maxSize, onFilesChange],
    );

    const handleDrop = useCallback(
      (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;
        processFiles(e.dataTransfer.files);
      },
      [disabled, processFiles],
    );

    const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          processFiles(e.target.files);
        }
      },
      [processFiles],
    );

    const removeFile = useCallback(
      (id: string) => {
        const updatedFiles = files.filter((f) => f.id !== id);
        setFiles(updatedFiles);
        onFilesChange?.(updatedFiles);
      },
      [files, onFilesChange],
    );

    const formatFileSize = (bytes: number) => {
      if (bytes < 1024) return bytes + " B";
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
      return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };

    return (
      <div className={cn("w-full", className)}>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all duration-fast cursor-pointer",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-border-hover hover:bg-surface/50",
            disabled && "pointer-events-none opacity-50",
          )}
        >
          <Upload
            className={cn(
              "h-10 w-10 mb-3 transition-colors",
              isDragging ? "text-primary" : "text-muted",
            )}
          />
          <p className="text-sm font-medium text-foreground">
            {isDragging ? "Drop files here" : "Drag & drop files here"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            or click to browse (max {formatFileSize(maxSize)})
          </p>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleChange}
            className="hidden"
            disabled={disabled}
          />
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((fileItem) => (
              <div
                key={fileItem.id}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3"
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
                    fileItem.status === "complete" &&
                      "bg-success/10 text-success",
                    fileItem.status === "error" &&
                      "bg-destructive/10 text-destructive",
                    fileItem.status === "uploading" &&
                      "bg-primary/10 text-primary",
                  )}
                >
                  {fileItem.status === "complete" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : fileItem.status === "error" ? (
                    <AlertCircle className="h-4 w-4" />
                  ) : (
                    <File className="h-4 w-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {fileItem.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(fileItem.file.size)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(fileItem.id);
                  }}
                  className="shrink-0 rounded-md p-1 text-muted hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

FileUpload.displayName = "FileUpload";
