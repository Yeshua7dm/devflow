import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./theme";

const Navbar = () => {
  return (
    <nav className="z-50 fixed flex-between gap-5 shadow-light-300 dark:shadow-none p-6 sm:px-12 w-full background-light900_dark200">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/site-logo.svg"
          alt="dev flow logo"
          width={32}
          height={32}
        />

        <p className="max-sm:hidden font-space-grotesk text-dark-100 dark:text-light-900 h2-bold">
          Dev
          <span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <div>GLobal Search</div>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
