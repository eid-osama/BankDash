import { SidebarProvider } from "@/components/ui/sidebar";
import SideBar from "./SideBar";
import Header from "./Header";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <SidebarProvider className="grid h-full grid-cols-1 lg:grid-cols-[250px_1fr] lg:grid-rows-[101px_1fr]">
      <SideBar />
      <Header />
      <main className="col-start-1 lg:col-start-2 col-end-3 row-start-2 row-end-3 h-full px-[25px] pt-5 pb-[25px] xxl:px-10 xxl:pt-6 xxl:pb-[39px] bg-[#F5F7FA] overflow-auto">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
export default AppLayout;
