import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className={twMerge(`h-fit  p-6`, className)}>
      <div
        className="
        w-full mb-4 flex items-center justify-between"
      >
        <div className="hidden lg:flex gap-x-2 items-center"></div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white justify-center items-center hover:opacity-75 transition">
            <HiHome className="text-black" size={30} />
          </button>
          <button className="rounded-full p-2 bg-white justify-center items-center hover:opacity-75 transition">
            <BiSearch className=" text-black" size={30} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button />
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
