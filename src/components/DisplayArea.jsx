import {useState} from "react";
import {usePosition} from "../contexts/positionContext";
import {DraggableContainer} from "./DraggableContainer";

export const DisplayArea = () => {
  const [pointerFinal, setPointerFinal] = useState({});

  const {
    positionState: {styles},
  } = usePosition();

  return (
    <main>
      <div
        className=" h-[400px] w-full bg-stone-300 flex"
        style={styles}
        onDragOver={(e) => {
          e.preventDefault();
          console.log({x: e.clientX, y: e.clientY});
          setPointerFinal({x: e.clientX, y: e.clientY});
        }}
        onDragEnter={(e) => e.preventDefault()}
      >
        <DraggableContainer pointerFinal={pointerFinal} />
      </div>
    </main>
  );
};
