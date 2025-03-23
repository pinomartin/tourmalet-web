import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export function Loading({ size = "md", text }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <Loader2 className={`${sizeMap[size]} animate-spin text-primary`} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="w-full h-full min-h-[200px] animate-pulse bg-muted rounded-md" />
  );
} 