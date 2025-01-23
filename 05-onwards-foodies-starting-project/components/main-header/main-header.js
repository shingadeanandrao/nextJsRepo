import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import styles from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";
import MainHeaderBackground from "./main-header-bg";

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground/>
      <header className={styles["header"]}>
        <Link className={styles.logo} href={"/"}>
          {" "}
          <Image src={logo} alt="A plate with food on it" priority /> NextLevel
          food
        </Link>
        <nav className={styles["nav"]}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
