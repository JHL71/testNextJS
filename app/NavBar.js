// 'use client';
import Link from "next/link";
import {usePathname} from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  return <nav>
    <Link style={{color:pathname === '/' ? 'red' : 'blue'}} href={"/"} className="hello">Home</Link>
    <Link style={{color:pathname === '/about-us' ? 'red' : 'blue'}} href={"/about-us"}>About</Link>
  </nav>
}