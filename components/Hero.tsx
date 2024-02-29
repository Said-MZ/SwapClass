import Image from "next/image";
import psutLogo from "@/app/psut-logo.png";
import Logo from "./Logo";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a href="https://www.psut.edu.jo" target="_blank" rel="noreferrer">
          <Image
            src={psutLogo}
            alt="psut logo"
            height="64"
            className=" hover:brightness-75 transition-all aspect-square object-cover"
          />
        </a>
        <span className="border-l h-6" />
        <Logo />
      </div>
      <div>
        <h1 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-6">
          Upgrade Your{" "}
          <span className=" bg-gradient-to-r from-neutral-50 to-transparent pl-1 pr-6 rounded-md text-neutral-900">
            Schedule:
          </span>
          Effortlessly Swap Courses & Sections with{" "}
          <span className=" bg-gradient-to-r from-neutral-50 to-transparent pl-1 pr-4 rounded-md text-neutral-900">
            Ease !
          </span>
        </h1>
        <p className="text-sm lg:text-lg text-neutral-300 !leading-tight mx-auto max-w-2xl text-center">
          The fastest & easiest way to exchange courses, or/and sections with
          other students{" "}
          <a
            href="https://www.psut.edu.jo"
            className="hover:text-gray-400 font-extrabold transition-all duration-300"
          >
            @PSUT
          </a>
        </p>
        <p className="text-sm lg:text-lg text-neutral-300 !leading-tight mx-auto max-w-2xl text-center mt-2">
          You don't like your lecturer? is your schedules inconvenient? or maybe
          sections closed to quick? SwapClass is your one-stop shop for seamless
          course exchanges.
        </p>
        <div className="mt-10 flex gap-4 justify-center items-center">
          <Btn
            text={"Get started"}
            dark={true}
            isLink={true}
            href={"/app"}
            size={"text-md lg:text-xl"}
          />
          <Btn
            text={"Sign up"}
            dark={false}
            isLink={true}
            href={"/login"}
            size={"text-md lg:text-xl"}
          />
        </div>
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent my-8" />
    </div>
  );
};
export default Hero;
