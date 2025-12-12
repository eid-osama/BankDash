import { cn } from "@/lib/utils";
interface RoundedIcon {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  sizeClass?: string;
  colorClass?: string;
  className?: string;
}
const RoundedIcon: React.FC<RoundedIcon> = ({
  Icon,
  sizeClass = "w-[50px] h-[50px]",
  colorClass = "bg-[#F5F7FA]",
  className = "",
}) => {
  return (
    <div
      className={cn(
        sizeClass,
        colorClass,
        className,
        "rounded-[50%] flex justify-center  items-center cursor-pointer flex-shrink-0"
      )}
    >
      <Icon />
    </div>
  );
};

export default RoundedIcon;
