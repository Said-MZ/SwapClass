import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
      <p>
        Made with {"</>"} by{" "}
        <a
          href="https://www.linkedin.com/in/said-mz/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Said-MZ
        </a>
      </p>
    </footer>
  );
};

export default Footer;
