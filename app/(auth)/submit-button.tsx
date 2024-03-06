"use client";

import { useFormStatus } from "react-dom";
import { useEffect, type ComponentProps } from "react";
import { toast } from "sonner";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
  toastText: string | null;
};

export function SubmitButton({
  children,
  pendingText,
  toastText,
  ...props
}: Props) {
  const { pending, action } = useFormStatus();
  const isPending = pending && action === props.formAction;
  useEffect(() => {
    if (isPending && action === props.formAction) {
      toast.success(toastText);
    }
  }, [isPending]);
  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
