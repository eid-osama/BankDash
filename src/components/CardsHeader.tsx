interface HeaderName {
  children: string;
}
function CardsHeader({ children }: HeaderName) {
  return (
    <h2 className="text-[18px] 2xl:text-[22px] font-bold text-[#343C6A] h-[27px] leading-[27px]">
      {children}
    </h2>
  );
}

export default CardsHeader;
