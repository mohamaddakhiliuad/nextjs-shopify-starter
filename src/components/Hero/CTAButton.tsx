import { MouseEventHandler } from "react";
import { FiArrowRight } from "react-icons/fi";
import cn from "classnames";

type CTAButtonProps = {
  text: string;
  primary?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function CTAButton({ text, primary = false, onClick }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 font-medium",
        primary
          ? "bg-[#e76f00] text-white hover:bg-[#e76f00]"
          : "border border-[#e76f00] text-[#e76f00] bg-white hover:bg-[#e76f00] hover:text-white"
      )}
    >
      {text}
      <FiArrowRight className="text-lg" />
    </button>
  );
}
