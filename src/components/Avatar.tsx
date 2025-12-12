import {
  Avatar as AvatarUi,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
interface AvatarProps {
  sizeClass?: string;
}
const Avatar: React.FC<AvatarProps> = ({ sizeClass = "w-[60px] h-[60px]" }) => {
  return (
    <AvatarUi className={cn(sizeClass)}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarUi>
  );
};

export default Avatar;
