"use client";

import React from "react";
import Btn from "./Btn";
import { toast } from "sonner";

const HeroBtns = async ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div className="mt-10 flex gap-4 justify-center items-center">
      <Btn
        text={"Get started"}
        dark={!isLoggedIn}
        isLink={isLoggedIn}
        href={"/app"}
        size={"text-md lg:text-xl"}
        onClick={() => {
          if (!isLoggedIn) {
            toast.error("You need to be logged in to access this page");
          }
        }}
      />
      {!isLoggedIn && (
        <Btn
          text={"Sign up"}
          dark={false}
          isLink={true}
          href={"/login"}
          size={"text-md lg:text-xl"}
        />
      )}
    </div>
  );
};

export default HeroBtns;
