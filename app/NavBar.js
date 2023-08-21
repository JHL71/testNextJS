// 'use client';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();
  return <nav className={styles.nav}>
    <Link className={`${styles.link} ${pathname === "/" ? styles.active : ""}`} href={"/"}>Home</Link>
    <Link className={[styles.link, pathname === "/about" ? styles.active : ""].join(' ')} href={"/about"}>About</Link>
  </nav>
}