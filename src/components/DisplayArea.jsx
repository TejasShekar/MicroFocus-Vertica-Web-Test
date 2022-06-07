import {usePosition} from "../contexts/positionContext";
import {DraggableContainer} from "./DraggableContainer";

export const DisplayArea = () => {
  const {positionState} = usePosition();
  return (
    <main
      className=" h-[400px] w-full bg-stone-300 flex"
      style={positionState.styles}
    >
      <DraggableContainer />
    </main>
  );
};
