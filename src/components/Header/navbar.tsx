'use client'
import React, { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.nav}>
      {/* Logo Section */}
      <div className={styles.pic}>
        <Image src="/logo.png" alt="Logo" width={60} height={50} className={styles.img1}  />
        
      </div>

      {/* Desktop Menu */}
      <nav className={styles.desktopMenu}>
        <ul>
       
        <li><Link href="/Home">HOME</Link> </li>
        {/* <li > <Link href="/Blog">BLOG</Link> </li> */}
        <li > <Link href="/About">ABOUT</Link> </li>
        <li > <Link href="/Contact">CONTACT US</Link> </li>
      
        </ul>
      </nav>

      {/* Download Button */}
      <button className={styles.button}>DOWNLOAD APP</button>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FiAlignJustify size={24} />
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.show : ""}`}>
        <nav>
          <ul>
          <li><Link href="/Home">HOME</Link> </li>
          <li > <Link href="/About">ABOUT</Link> </li>
          <li>Services</li>
          <li > <Link href="/Contact">CONTACT US</Link> </li>
          <button className={styles.button}>Download Now</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
