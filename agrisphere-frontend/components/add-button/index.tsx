import { Button } from "../ui/button";
interface iProps {
  filled?: boolean;
  handleClick?: () => void;
  btnText: string;
}

const AddButton: React.FC<iProps> = ({
  filled = true,
  handleClick,
  btnText,
}) => {
  return (
    <Button
      onClick={handleClick}
      variant={filled ? "customPrimary" : "customOutline"}
      className="px-6 rounded-lg w-auto"
    >
      <div
        className={`w-6 h-6 rounded-full text-sm flex items-center justify-center ${
          filled ? " text-[#17BA75] bg-white" : "bg-[#17BA75] text-white"
        } font-semibold`}
      >
        +
      </div>
      {btnText}
    </Button>
  );
};

export default AddButton;
