import { Search as SearchIcon } from "@/assets/icons";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
function Search() {
  return (
    <InputGroup className=" bg-[#F5F7FA] rounded-[40px]  h-[50px]">
      <InputGroupInput
        placeholder="Search for something"
        className="placeholder:text-[#8BA3CB] placeholder:pl-[7px] placeholder:text-[15px]"
      />
      <InputGroupAddon className="pl-[25px]">
        <SearchIcon className="!w-[20px] !h-[20px]" />
      </InputGroupAddon>
    </InputGroup>
  );
}

export default Search;
