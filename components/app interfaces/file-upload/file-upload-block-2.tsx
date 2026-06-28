"use client";

import { useState } from "react";
import { RiAttachmentLine, RiCloseLine, RiFileLine } from "@remixicon/react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

const DEMO_FILE = {
  name: "project-brief.pdf",
  size: "1.8 MB",
};

export default function FileUploadBlock2() {
  const [file, setFile] = useState<{ name: string; size: string } | null>(
    DEMO_FILE,
  );

  function handleRemove() {
    setFile(null);
  }

  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-sm">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="attachment">Attachment</FieldLabel>

            <div className="flex items-center border border-border bg-background">
              <span className="flex size-8 shrink-0 items-center justify-center border-r border-border bg-muted text-muted-foreground">
                <RiAttachmentLine className="size-4" aria-hidden="true" />
              </span>

              <span
                className={cn(
                  "min-w-0 flex-1 truncate px-3 text-xs",
                  file ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {file ? file.name : "No file chosen"}
              </span>

              <label
                htmlFor="attachment"
                className="inline-flex h-8 shrink-0 cursor-pointer items-center border-l border-border bg-muted px-3 text-xs font-medium text-foreground transition-colors select-none hover:bg-muted/70"
              >
                Choose File
              </label>

              <input
                id="attachment"
                type="file"
                accept=".pdf,.png,.jpg,.docx"
                className="sr-only"
                onChange={(e) => {
                  const picked = e.target.files?.[0];
                  if (picked) {
                    const kb = picked.size / 1024;
                    const size =
                      kb >= 1024
                        ? `${(kb / 1024).toFixed(1)} MB`
                        : `${Math.round(kb)} KB`;
                    setFile({ name: picked.name, size });
                  }
                  e.target.value = "";
                }}
              />
            </div>

            <FieldDescription>
              Accepted: PDF, PNG, JPG, DOCX. Max 10 MB.
            </FieldDescription>

            {file && (
              <Attachment state="done" size="sm" className="w-full">
                <AttachmentMedia>
                  <RiFileLine aria-hidden="true" />
                </AttachmentMedia>
                <AttachmentContent>
                  <AttachmentTitle>{file.name}</AttachmentTitle>
                  <AttachmentDescription className="font-mono">
                    {file.size}
                  </AttachmentDescription>
                </AttachmentContent>
                <AttachmentActions>
                  <AttachmentAction
                    aria-label="Remove file"
                    onClick={handleRemove}
                  >
                    <RiCloseLine aria-hidden="true" />
                  </AttachmentAction>
                </AttachmentActions>
              </Attachment>
            )}
          </Field>
        </FieldGroup>
      </div>
    </section>
  );
}
