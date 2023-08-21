'use client';
import Link from "next/link";
import {usePathname} from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  return <nav>
    <Link legacyBehavior href={"/"}>
      <a className={pathname === '/' ? "active" : ""}>Home</a>
    </Link>
    <Link legacyBehavior href={"/about"}>
      <a className={pathname === '/about' ? "active" : ""}>About</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
      }
      .active {
        color: tomato;
      }
    `}</style>
  </nav>
}