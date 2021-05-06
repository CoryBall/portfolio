import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.nav className="fixed w-full flex justify-between text-light px-8 py-5 h-30">
        <a
          className="focus:outline-none text-2xl font-bold font-serif mt-3"
          href="/"
        >
          CB
        </a>
        <div>
          <Link href={"/github-light.png"}>
            <a target="_blank">
              <Image
                src="https://coryball.sfo3.digitaloceanspaces.com/portfolio/social/github-light.png"
                alt="Github Icon"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
    </motion.nav>
  );
};

export default Header
