import {DraggableContainer} from "./DraggableContainer";

export const DisplayArea = () => {
  return (
    <main>
      <div className=" h-[400px] w-full bg-stone-300 flex">
        <DraggableContainer />
      </div>
    </main>
  );
};
