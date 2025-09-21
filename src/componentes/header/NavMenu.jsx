"use client";

import Link from "next/link"
import { useBurgerMenu } from "../../hooks/useBurgerMenu"


const NavMenu = ({items}) => {
  const {toggleMenu} = useBurgerMenu()

  return (
    <ul onClick={toggleMenu}>
      <li className="celular">
        <a href="#">
          <i className="fa-solid fa-bars" id="burgerIcon"></i>
        </a>
      </li>
      {
        items.map( ({txt, ruta}) => (
          <MenuItem txt={txt} ruta={ruta} key={ruta} />)
        )
      }
    </ul>
  )
}


const MenuItem = ({txt, ruta}) => {
  return (
    <li className="pc">
      {/* <a href={ruta}>{txt}</a> */}
      <Link href={ruta}>{txt}</Link>
    </li>
  )
}



export default NavMenu
