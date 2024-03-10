import React, { useState } from 'react'
import './Navbar.scss'
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { LiaAddressCard } from "react-icons/lia";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { LiaCommentsSolid } from "react-icons/lia";
import { RiContactsBookLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false)

  function handleOpenNavbar() {
    setOpenNavbar(!openNavbar)
  }
  return (
    <nav className={`${openNavbar ? "open" : ""}`}>
      <div className={`closeBtn ${openNavbar ? 'menu' : ""}`} onClick={handleOpenNavbar}>
        {
          openNavbar
            ?
            <IoMdMenu />
            :
            <RiCloseLine />
        }
      </div>
      <ul>
        <li>
          <NavLink className="link" >
            {/* <a href="#FeedBack"> */}
              <HiOutlineHome />
              <p>Home</p>
            {/* </a> */}

          </NavLink>
        </li>
        <li>
          <NavLink className="link">
            <SlUser />
            <p>About Me</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link">
            <LiaAddressCard />
            <p>Resume</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link">
            <MdOutlineHomeRepairService />
            <p>Services</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link">
            <FaRegFolderOpen />
            <p>Porfolio</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="link">
            <LiaCommentsSolid />
            <p>Feed Back</p>
          </NavLink>
        </li>
        <li className='contactLi'>
          <NavLink className="link">
            <div className="hiddenIcon">
              <RiContactsBookLine />
            </div>
            <p>Contact Me</p>

            <span ></span>
          </NavLink>

        </li>
      </ul>
    </nav>
  )
}

export default Navbar