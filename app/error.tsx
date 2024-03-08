"use client";

import Btn from "@/components/Btn";

const Error = ({ error }: { error: Error }) => {
  return (
    <section className="relative bg-neutral-950 text-neutral-50 antialiased overflow-x-hidden w-screen h-screen grid place-items-center overflow-hidden">
      <div className="z-20">
        <h1 className="text-3xl sm:text-6xl font-bold text-center">
          An Error Occurred:
        </h1>
        <p className="text-md sm:text-xl text-neutral-300 text-center">
          {error.message}
        </p>
        <Btn
          isLink={true}
          dark={true}
          text="Home"
          href="/"
          style="bg-transparent block mt-4 border-none underline"
        />
      </div>
    </section>
  );
};

export default Error;
