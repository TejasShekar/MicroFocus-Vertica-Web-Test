import {useEffect, useRef, useState} from "react";
import {usePosition} from "../contexts/positionContext";

export const DisplayArea = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [pointerInitial, setPointerInitial] = useState({x: 0, y: 50});
  const [finalPosition, setFinalPosition] = useState({x: 0, y: 50});
  const {
    positionDispatch,
    positionState: {styles, positionName},
  } = usePosition();
  const dragDivRef = useRef(null);

  useEffect(() => {
    const onKeyPress = (e) => {
      switch (e.key) {
        case "Escape":
          dragDivRef.current.style.display = "none";
          break;
        case "Enter":
          dragDivRef.current.style.display = "flex";
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  return (
    <main>
      <div
        className=" h-[400px] w-full bg-zinc-300 flex"
        onDragEnter={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={() => {}}
      >
        <div
          className=" h-[200px] w-[200px] text-lg font-semibold bg-orange-400 flex flex-col justify-between absolute rounded-lg"
          ref={dragDivRef}
          draggable="true"
          onDragStart={(e) => {
            setIsDragging(true);
            setPointerInitial({x: e.clientX, y: e.clientY});
          }}
          onDrag={(e) => {
            if (!isDragging) return;
            let dragDivDetails = e.target.getBoundingClientRect();
            const divPosition = {
              x: dragDivDetails.left + e.clientX - pointerInitial.x,
              y: dragDivDetails.top + e.clientY - pointerInitial.y,
            };
            if (
              divPosition.y > 399 ||
              divPosition.y < 51 ||
              divPosition.x + 200 > document.documentElement.clientWidth ||
              divPosition.x < 0
            ) {
              setIsDragging(false);
              return;
            }
            setFinalPosition(divPosition);
          }}
          onDragEnd={(e) => {
            setIsDragging(false);
            positionDispatch({type: "DRAG_POSITIONS", payload: finalPosition});
          }}
          style={styles}
        >
          <p className="p-1 ">
            {positionName !== "" ? positionName : "Floating..."}
          </p>
          <p className="p-1 text-right text-base">Drag me around !</p>
        </div>
      </div>
    </main>
  );
};
