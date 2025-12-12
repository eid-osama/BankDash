import React from "react";
import {
  Accounts,
  CreditCard,
  Dashboard,
  Investment,
  Loan,
  Services,
  Settings,
  Transfer,
} from "@/assets/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <Dashboard fill="#b1b1b1" className="!w-[25px] !h-[25px]" />,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: <Transfer className="!w-[25px] !h-[25px]" />,
  },
  {
    title: "Accounts",
    url: "/accounts",
    icon: <Accounts className="!w-[25px] !h-[25px]" />,
  },
  {
    title: "Investments",
    url: "/investments",
    icon: <Investment className="!w-[25px] !h-[25px]" />,
  },
  {
    title: "Credit Cards",
    url: "/creditcard",
    icon: <CreditCard className="!w-[25px] !h-[25px]" />,
  },
  {
    title: "Loans",
    url: "/loans",
    icon: <Loan className="!w-[25px] !h-[25px]" />,
  },
  {
    title: "Services",
    url: "/services",
    icon: <Services className="!w-[25px] !h-[25px]" />,
  },

  {
    title: "Settings",
    url: "/settings",
    icon: <Settings className="!w-[25px] !h-[25px]" />,
  },
];

export default function SideBar() {
  return (
    <Sidebar
      className="row-span-2 col-start-1 col-end-2 "
      collapsible="offcanvas"
    >
      <SidebarHeader className="bg-white flex flex-row items-center justify-between">
        <Logo />
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`pl-[44px] gap-x-[26px] h-[60px] pr-0 py-0 `}
                      >
                        <div className="flex items-center gap-x-[26px]">
                          {isActive ? (
                            <div className="flex items-center gap-x-[26px]">
                              {React.cloneElement(item.icon, {
                                fill: "#3B82F6",
                              })}
                              <span className="text-[18px] font-normal text-blue-600">
                                {item.title}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-x-[26px]">
                              {item.icon}
                              <span className="text-[18px] font-normal text-gray-600">
                                {item.title}
                              </span>
                            </div>
                          )}
                        </div>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
