interface LinkName {
  children: string;
}
function CardsLink({ children }: LinkName) {
  return (
    <a
      href=""
      className="text-[15px] 2xl:text-[17px] font-bold text-[#343C6A] pr-[7px] h-[21px] leading-[24px]"
    >
      {children}
    </a>
  );
}

export default CardsLink;
