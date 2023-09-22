'use client'
import React from "react";
import { usePathname } from "next/navigation";

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
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";

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
          <p className="font-bold text-inherit text-xl">Predis</p>
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
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-white">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
