import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TChildrenProps = {
  children?: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TChildrenProps) => {
  return (
    <div
      className={cn("max-w-[1280px] w-full mx-auto px-3", className)}
    >
      {children}
    </div>
  );
};

export default Container;
