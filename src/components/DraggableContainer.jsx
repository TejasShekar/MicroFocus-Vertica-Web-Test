import {useState} from "react";
import {usePosition} from "../contexts/positionContext";

export const DraggableContainer = ({pointerFinal}) => {
  const [isDragging, setIsDragging] = useState(false);
  const {
    positionDispatch,
    positionState: {styles, positionName},
  } = usePosition();

  return (
    <div
      className=" h-[200px] w-[200px] text-lg font-semibold bg-stone-400 border-[1px] border-black flex flex-col justify-between absolute"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => {
        if (!isDragging) return;
        let position = e.target.getBoundingClientRect();
        const finalPosition = {
          x: e.clientX - position.width / 2,
          y: e.clientY - position.height / 2,
        };
        positionDispatch({type: "DRAG_POSITIONS", payload: finalPosition});
      }}
      style={styles}
    >
      <p className="p-1 ">
        {positionName !== "" ? positionName : "Floating..."}
      </p>
      <p className="p-1 text-right text-base">Drag me around !</p>
    </div>
  );
};
