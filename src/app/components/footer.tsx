// 'use client';

// import { usePathname } from "next/dist/client/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-blue-500 text-white text-center p-4 w-full ">

        <div className="flex gap-5 justify-center items-center"> 

        <Link href="http://www.github.com/laibathecoder">
        <Image src="/gitwhite.webp" alt="Github Logo" width={47} height={47}/>
        </Link>

        <Link href="http://www.linkedin.com/in/laibanaz">
        <Image src="/linkdinwht.png" alt="Github Logo" width={53} height={53}/>
        </Link>

        </div>

        <p className="text-center">&copy; {new Date().getFullYear()} Inkspire. All rights reserved.</p>
      </footer>
    </div>
  );
}
