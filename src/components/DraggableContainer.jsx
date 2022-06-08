import {usePosition} from "../contexts/positionContext";

export const DraggableContainer = () => {
  const {
    positionState: {positionName},
  } = usePosition();

  return (
    <div
      className=" h-[150px] w-[150px] text-lg font-semibold bg-stone-400 border-[1px] border-black flex flex-col justify-between"
      draggable="true"
    >
      <p className="p-1 ">
        {positionName !== "" ? positionName : "Floating..."}
      </p>
      <p className="p-1 text-right text-base">Drag me around !</p>
    </div>
  );
};
