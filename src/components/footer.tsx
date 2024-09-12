import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center py-2">
      <p>
        ©{" "}
        <Link
          href={"https://github.com/BlutzerZ"}
          className="font-semibold text-green-400"
        >
          BlutzerZ | Nurudin Wafiq Mustaqim
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
