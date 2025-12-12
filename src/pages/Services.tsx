import { Convenience, Flexibility, Safety } from "@/assets/icons";
import BankServicesList from "@/components/BankServicesList";
import CardsHeader from "@/components/CardsHeader";
import ServiceCard from "@/components/ServiceCard";

function Services() {
  return (
    <div className="grid grid-cols-1 justify-between sm:grid-cols-3 gap-x-[25px] xxl:gap-x-[30px] gap-y-6  xxl:max-w-[1171px] xxl:mx-auto">
      <div className="grid col-span-4 gap-y-5 md:flex  md:gap-[25px]">
        <ServiceCard
          title="Flexibility"
          value="customizable options"
          Icon={Flexibility}
          gap-y-6
          className="w-full max-w-[350px]"
        />
        <ServiceCard
          title="Convenience"
          value="Easy payments"
          Icon={Convenience}
          className="w-full max-w-[350px]"
        />
        <ServiceCard
          title="Safety"
          value="We are your allies"
          Icon={Safety}
          className="w-full max-w-[350px]"
        />
      </div>
      <div className="col-span-3">
        <div className="flex mb-5 h-[27px]">
          <CardsHeader>Bank Services List</CardsHeader>
        </div>
        <BankServicesList />
      </div>
    </div>
  );
}

export default Services;
