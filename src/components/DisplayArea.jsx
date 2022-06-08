import {useState} from "react";
import {DraggableContainer} from "./DraggableContainer";

export const DisplayArea = () => {
  const [pointerFinal, setPointerFinal] = useState({});

  return (
    <main>
      <div
        className=" h-[400px] w-full bg-stone-300 flex"
        onDragOver={(e) => {
          e.preventDefault();
          setPointerFinal({x: e.clientX, y: e.clientY});
        }}
        onDragEnter={(e) => e.preventDefault()}
        // onDragLeave={(e) => console.log("left the area")}
      >
        <DraggableContainer pointerFinal={pointerFinal} />
      </div>
    </main>
  );
};
