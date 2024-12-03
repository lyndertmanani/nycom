import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    // NavbarItem,
    // Tooltip,
    // NavbarMenu,
    // NavbarMenuItem,
    NavbarMenuToggle,
    
  } from "@nextui-org/react";
  import React from "react";
   
//   import { NavLink } from "react-router-dom";
  import Logo from "/logo-x.png";
  export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="h-20 p-5">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
              <img src={Logo} className="rounded-none h-20 py-1" alt="Main logo" />  
          </NavbarBrand>
        </NavbarContent>
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
      </Navbar>
    );
  }