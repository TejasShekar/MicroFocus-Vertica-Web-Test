import {createContext, useContext, useReducer} from "react";
import {positionReducer} from "../reducers/positionReducer";

const PositionContext = createContext();
const usePosition = () => useContext(PositionContext);
const PositionProvider = ({children}) => {
  const [positionState, positionDispatch] = useReducer(positionReducer, {
    positionName: "",
    styles: {},
  });
  return (
    <PositionContext.Provider value={{positionState, positionDispatch}}>
      {children}
    </PositionContext.Provider>
  );
};

export {usePosition, PositionProvider};
