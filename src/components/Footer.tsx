import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="page-footer flex justify-between px-20 py-2 items-center bg-slate-800 text-white w-full h-10">
        <h4 className=" text-md font-semibold">Loop &copy;2024</h4>
        <div className=" flex gap-2 items-center">
          <BsInstagram />
          <AiFillGithub size={20} />
          <RiFacebookCircleLine size={20} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
