interface iProps {
  list: { title: string; value: string }[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabFilter: React.FC<iProps> = ({ list, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-end mb-5">
      <div className="border border-[#0A8D56] rounded-sm flex bg-[#F3F4F7] w-auto">
        {list.map((_, index: number) => (
          <div
            onClick={() => setActiveTab(_.value)}
            key={index}
            className={`text-xs py-3 px-4 cursor-pointer ${
              _.value === activeTab
                ? "bg-white text-[#01190F]"
                : "text-[#9C9C9C]"
            }`}
          >
            {_?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabFilter;
