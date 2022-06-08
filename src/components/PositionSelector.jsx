import {usePosition} from "../contexts/positionContext";

export const PositionSelector = () => {
  const {positionDispatch} = usePosition();
  const positionHandler = (e) => {
    positionDispatch({type: e.target.value});
  };

  return (
    <div className="flex items-center flex-wrap ">
      <h3 className="font-bold">Position : </h3>
      <ul className="flex items-center">
        <li className="mx-2">
          <input
            type="radio"
            id="center"
            name="position_selector"
            value="CENTER"
            onChange={positionHandler}
          />
          <label htmlFor="center">Center</label>
        </li>
        <li className="mx-2">
          <input
            type="radio"
            id="lower_right"
            name="position_selector"
            value="LOWER_RIGHT"
            onChange={positionHandler}
          />
          <label htmlFor="lower_right">Lower Right</label>
        </li>
      </ul>
    </div>
  );
};
