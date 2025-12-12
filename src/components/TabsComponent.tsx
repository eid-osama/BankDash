import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabsComponentProps {
  tabsNames: string[];
}

function TabsComponent({ tabsNames }: TabsComponentProps) {
  if (!tabsNames.length) return null;

  return (
    <Tabs
      defaultValue={tabsNames[0]}
      className="w-full border-b-[1px] border-[#EBEEF2] h-[40px]"
    >
      <TabsList className="!bg-[#F5F7FA] gap-x-[40px] sm:gap-x-[60px] lg:gap-x-[82px] ">
        {tabsNames.map((tab, index) => (
          <TabsTrigger
            value={tab}
            key={index}
            className="relative text-[#718EBF] text-[13px] lg:text-[16px] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-9px] data-[state=active]:after:rounded-t-[10px] data-[state=active]:after:w-[100px] sm:data-[state=active]:after:w-[120px] lg:data-[state=active]:after:w-[145px] data-[state=active]:after:h-[3px] data-[state=active]:after:bg-[#1814F3] data-[state=active]:text-[#1814F3] data-[state=active]:!shadow-none data-[state=active]:!bg-[#F5F7FA]"
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default TabsComponent;
