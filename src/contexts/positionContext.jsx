import {createContext, useContext, useReducer} from "react";
import {positionReducer} from "../reducers/positionReducer";

const PositionContext = createContext();
const usePosition = () => useContext(PositionContext);
const PositionProvider = ({children}) => {
  const [positionState, positionDispatch] = useReducer(positionReducer, {
    // get saved position on intial render
    positionName: localStorage.getItem("positionName") ?? "",
    styles: JSON.parse(localStorage.getItem("divStyle")) ?? {},
  });
  return (
    <PositionContext.Provider value={{positionState, positionDispatch}}>
      {children}
    </PositionContext.Provider>
  );
};

export {usePosition, PositionProvider};
