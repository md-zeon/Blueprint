"use client";

import * as React from "react";
import { RiCheckLine, RiCloseLine, RiUploadCloud2Line } from "@remixicon/react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface UploadFile {
  id: number;
  name: string;
  size: string;
  progress: number;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUploadBlock1() {
  const [files, setFiles] = React.useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const nextId = React.useRef(1);
  const timers = React.useRef<Record<number, ReturnType<typeof setInterval>>>(
    {},
  );

  React.useEffect(() => {
    const running = timers.current;
    return () => {
      Object.values(running).forEach((t) => clearInterval(t));
    };
  }, []);

  function simulateUpload(id: number) {
    timers.current[id] = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.id !== id) return f;
          const next = Math.min(100, f.progress + 8);
          if (next >= 100) {
            clearInterval(timers.current[id]);
            delete timers.current[id];
          }
          return { ...f, progress: next };
        }),
      );
    }, 180);
  }

  function addFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    const incoming: UploadFile[] = Array.from(fileList).map((file) => ({
      id: nextId.current++,
      name: file.name,
      size: formatSize(file.size),
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...incoming]);
    incoming.forEach((f) => simulateUpload(f.id));
  }

  function removeFile(id: number) {
    if (timers.current[id]) {
      clearInterval(timers.current[id]);
      delete timers.current[id];
    }
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function clearAll() {
    Object.values(timers.current).forEach((t) => clearInterval(t));
    timers.current = {};
    setFiles([]);
  }

  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload files</CardTitle>
          <CardDescription>
            Attach documents, images, or other assets to this project.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <input
            ref={inputRef}
            type="file"
            multiple
            className="sr-only"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              addFiles(e.dataTransfer.files);
            }}
            className={cn(
              "flex flex-col items-center justify-center gap-3 border border-dashed border-border bg-muted/40 px-6 py-10 transition-colors",
              isDragging && "border-primary bg-muted",
            )}
          >
            <div className="flex size-10 items-center justify-center border border-border bg-background">
              <RiUploadCloud2Line
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-medium text-foreground">
                Drag &amp; drop files or browse
              </p>
              <p className="text-xs text-muted-foreground">
                Supports PDF, PNG, JPG up to 25 MB
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => inputRef.current?.click()}
            >
              <RiUploadCloud2Line data-icon="inline-start" aria-hidden="true" />
              Browse Files
            </Button>
          </div>

          {files.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground tabular-nums">
                  <span className="font-medium text-foreground">
                    {files.length}
                  </span>{" "}
                  {files.length === 1 ? "File" : "Files"}
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Clear All
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {files.map((file) => {
                  const done = file.progress >= 100;
                  return (
                    <li key={file.id}>
                      <Attachment
                        state={done ? "done" : "uploading"}
                        size="sm"
                        className="w-full"
                      >
                        <AttachmentMedia>
                          {done ? (
                            <RiCheckLine
                              className="text-primary"
                              aria-hidden="true"
                            />
                          ) : (
                            <Spinner />
                          )}
                        </AttachmentMedia>
                        <AttachmentContent>
                          <AttachmentTitle>{file.name}</AttachmentTitle>
                          <AttachmentDescription className="tabular-nums">
                            {done
                              ? `Uploaded ${file.size}`
                              : `Uploading ${file.progress}%`}
                          </AttachmentDescription>
                        </AttachmentContent>
                        <AttachmentActions>
                          <AttachmentAction
                            aria-label={`Remove ${file.name}`}
                            onClick={() => removeFile(file.id)}
                          >
                            <RiCloseLine aria-hidden="true" />
                          </AttachmentAction>
                        </AttachmentActions>
                      </Attachment>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
