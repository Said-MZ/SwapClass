import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-foreground/10 py-8 flex flex-col justify-center text-center text-xs px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full max-w-[1200px] mx-auto gap-8">
        <div className="flex flex-col items-start justify-center max-w-96 ">
          <Logo />

          <h2 className="text-xl capitalize tracking-wide font-semibold mt-6">
            Find me on:
          </h2>
          <ul className="flex justify-between items-center w-full mt-2">
            <li>
              <Link
                href="https://github.com/Said-MZ/"
                className="hover:opacity-60 transition-all duration-300"
              >
                <FaGithub className="w-8 h-8" />
                <span className="sr-only">Github</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/said-mz/"
                className="hover:opacity-60 transition-all duration-300"
              >
                <FaLinkedin className="w-8 h-8" />
                <span className="sr-only">Linked in</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/feartfulz"
                className="hover:opacity-60 transition-all duration-300"
              >
                <AiFillInstagram className="w-8 h-8" />
                <span className="sr-only">instagram</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-96 order-last">
          <p>
            This app is for helping psut students to get the best possible
            schedules, it was built by students for students. It is not
            affiliated with the university in any way.
          </p>
          <br />
          <p>
            The project is open source and you can find the code on{" "}
            <Link
              href="https://github.com/Said-MZ/SwapClass"
              className="underline hover:text-neutral-400 transition-all"
            >
              Github
            </Link>
          </p>
          <br />
          <p>
            If you have any questions or suggestions, feel free to contact me
            through my{" "}
            <Link
              href="https://www.linkedin.com/in/said-mz/"
              className="underline hover:text-neutral-400 transition-all"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://www.instagram.com/feartfulz"
              className="underline hover:text-neutral-400 transition-all"
            >
              Instagram
            </Link>
          </p>
        </div>
        <div className="max-w-96 md:order-last">
          <h2 className="text-xl capitalize tracking-wide font-semibold text-left">
            Quick Links
          </h2>
          <ul className="mt-2 flex flex-col gap-2 items-center md:items-start ">
            <li>
              <Link
                href="/"
                className="hover:opacity-60 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/app"
                className="hover:opacity-60 transition-all duration-300"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:opacity-60 transition-all duration-300"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="hover:opacity-60 transition-all duration-300"
              >
                Create An Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t-[1px] pt-6 border-neutral-900">
        <p>
          Made with {"</>"} by{" "}
          <Link
            href="https://www.linkedin.com/in/said-mz/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Said-MZ
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
