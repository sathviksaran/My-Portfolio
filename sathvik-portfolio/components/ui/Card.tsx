import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/70
      backdrop-blur-xl
      p-8
      hover:border-blue-500
      hover:-translate-y-2
      hover:shadow-xl
      hover:shadow-blue-500/20
      transition-all
      duration-300
      "
    >
      {children}
    </div>
  );
}