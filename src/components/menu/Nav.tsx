import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Tooltip,
 
    // NavbarMenu,
    // NavbarMenuItem,
    NavbarMenuToggle,
    
  } from "@nextui-org/react";
  import React from "react";
   
  import { NavLink } from "react-router-dom";
  import Logo from "/logo-x.png";
  export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="h-16 p-5 bg-white/70 ">
       
          <NavbarBrand>
              <img src={Logo} className="rounded-none h-20 py-5" alt="Main logo" />  
        </NavbarBrand>
       
         {/* 
        <NavbarContent className="hidden sm:flex font-semibold text-black gap-4" justify="end">
          <NavbarItem>
            <NavLink className="hover:text-black duration-700" color="foreground" to="/">
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
          <Tooltip showArrow={true} content="Documentation" className="  text-black">
            <NavLink className="hover:text-black duration-700" color="foreground" to="doc">
            Service
            </NavLink>
            </Tooltip>
          </NavbarItem>
          <NavbarItem>
            <NavLink className="hover:text-black duration-700" color="foreground" to="about">
             About Us
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink className="hover:text-black duration-700 border-2 border-orange-500 py-1 px-3 " color="foreground" to="contact">
              Contact
            </NavLink>
          </NavbarItem>
         
        </NavbarContent>
    
        <NavbarMenu  className="bg-black bg-opacity-100 text-slate-600"  >
          <NavbarMenuItem>
            <NavLink color="foreground" className="hover:text-black duration-700" to="/">
              Home
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <NavLink className="hover:text-black duration-700" color="foreground" to="doc">
              Docs
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground"  className="hover:text-black duration-700" to="about">
              About
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground"  className="hover:text-black duration-700" to="contact">
              Contact
            </NavLink>
          </NavbarMenuItem>
           
        </NavbarMenu> */}
         {/* <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          /> */}
         <NavbarContent justify="end">
        <NavbarItem>
          <NavLink 
            className='px-4 lg:py-2   border-none   border font-medium text-black  bg-[#ffffff]   hover:text-black/50 duration-700' 
            to="vote"
          >
            Go Voting
          </NavLink>
        </NavbarItem>
        </NavbarContent>
        
      </Navbar>
    );
  }