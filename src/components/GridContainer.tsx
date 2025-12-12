interface GridContainer {
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainer> = ({ children }) => {
  return (
    <div className="grid h-full grid-cols-[250px_1fr] grid-rows-[101px_1fr]">
      {children}
    </div>
  );
};

export default GridContainer;
