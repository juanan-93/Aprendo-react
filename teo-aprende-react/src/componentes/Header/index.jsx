import React from "react";
import { MenuContextProvider } from "../../context/MenuContext";
import Menu from "../Menu";
import Title from "../Title";
import HamburgerButton from "../Hamburger";
import styles from './Header.module.css';

export default function Header() {

  return (
    <header>
      <Title />

      <MenuContextProvider>
        <HamburgerButton />
        <Menu />
      </MenuContextProvider>
    </header>
  );
}