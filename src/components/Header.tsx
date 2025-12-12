import { Notification, SettingsTransparent } from "@/assets/icons";
import Avatar from "./Avatar";
import RoundedIcon from "./RoundedIcon";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";

function Header() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Overview";
      case "/creditcard":
        return "Credit Cards";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      case "/investments":
        return "Investments";
      case "/loans":
        return "Loans";
      case "/services":
        return "Services";
      case "/settings":
        return "Settings";
      default:
        return "Overview";
    }
  };

  return (
    <div className=" lg:col-start-2 col-span-full row-start-1 flex justify-between items-center gap-x-[20px] xl:gap-x-[35px] gap-y-[20px] flex-wrap px-4 lg:px-[40px] py-[20px] h-auto">
      {/* Left side - Burger + Title */}

      {/* Burger menu - only on mobile */}
      <SidebarTrigger className="lg:hidden p-2 hover:bg-gray-100 rounded-lg order-1">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </SidebarTrigger>

      <p className="w-fit text-xl text-center lg:text-left text-[20px] md:text-[25px] xl:text-[30px] font-semibold text-[var(--primary-2)] leading-[34px] grow  order-2 lg:order-1">
        {getPageTitle()}
      </p>
      <div className="flex justify-center gap-x-[30px] order-4 lg:order-2  basis-full lg:basis-auto">
        <Search />
        <RoundedIcon Icon={SettingsTransparent} className="!hidden lg:!flex" />
        <RoundedIcon Icon={Notification} className="!hidden lg:!flex" />
      </div>
      <div className="order-3 ">
        <Avatar sizeClass="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] " />
      </div>
    </div>
  );
}

export default Header;
