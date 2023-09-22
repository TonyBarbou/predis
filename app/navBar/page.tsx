'use client'
import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";

export default function NavBar() {
  return (
    <Navbar className="bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit">Predis</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Datasets">
            Datasets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Experiments">
            Experiments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Results">
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
    </Navbar>
  );
}
