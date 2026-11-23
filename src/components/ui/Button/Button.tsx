import type { AnchorHTMLAttributes, ReactNode } from "react";
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };
export function Button({ children, className = "", ...props }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full bg-[#78aebe] px-6 py-3 text-[10px] font-bold uppercase tracking-[.13em] text-white transition duration-300 hover:bg-[#5c98aa] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
