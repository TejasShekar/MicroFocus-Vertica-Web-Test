import {PositionSelector, Time} from "./";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-[50px] bg-black  px-4">
      <PositionSelector />
      <p className=" text-orange-300">
        Press <span className="font-bold">ESC</span> key to hide the window and{" "}
        <span className="font-bold">ENTER</span> key to show it again
      </p>
      <Time />
    </header>
  );
};
