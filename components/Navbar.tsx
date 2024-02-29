import React from "react";
import Logo from "./Logo";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16  z-20 bg-black px-2 lg:px-8">
      <div className="w-full max-w-[1200px] flex justify-between items-center p-3 text-sm">
        <Logo />
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
