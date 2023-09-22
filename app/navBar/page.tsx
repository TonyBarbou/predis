'use client'
import React from "react";
import { usePathname } from "next/navigation";
import { SignedOut, SignedIn, UserProfile, UserButton } from '@clerk/nextjs';
import {Button} from "@nextui-org/react";
import { SignInButton } from "@clerk/nextjs";

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Datasets",
    "Experiments",
    "Results",
  ];

  return (
    <Navbar className="bg-black" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl text-white">Predis</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={usePathname() == "/" ? true : false}>
          <Link color={usePathname() == "/" ? "primary" : "foreground"} href="/" aria-current={usePathname() == "/" ? "page" : "false"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={usePathname() == "/Datasets" ? true : false}>
          <Link color={usePathname() == "/Datasets" ? "primary" : "foreground"} href="/Datasets" aria-current={usePathname() == "/Datasets" ? "page" : "false"}>
            Datasets
          </Link>
        </NavbarItem>
        <NavbarItem isActive={usePathname() == "/Experiments" ? true : false}>
          <Link color={usePathname() == "/Experiments" ? "primary" : "foreground"} href="/Experiments" aria-current={usePathname() == "/Experiments" ? "page" : "false"}>
            Experiments
          </Link>
        </NavbarItem>
        <NavbarItem isActive={usePathname() == "/Results" ? true : false}>
          <Link color={usePathname() == "/Results" ? "primary" : "foreground"} href="/Results" aria-current={usePathname() == "/Results" ? "page" : "false"}>
            Results
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
      <SignedOut>
        <SignInButton>
            <Button color="primary">Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
          <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
