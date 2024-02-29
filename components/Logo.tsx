import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold text-2xl bg-gradient-to-br bg-clip-text text-transparent from-neutral-50 to-neutral-500 hover:brightness-50 transition-all"
    >
      SwapClass
    </Link>
  );
};

export default Logo;
