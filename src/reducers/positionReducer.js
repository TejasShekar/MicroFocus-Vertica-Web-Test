export const positionReducer = (state, {type, payload}) => {
  switch (type) {
    case "CENTER":
      return {
        ...state,
        positionName: "Center",
        styles: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          ...payload,
        },
      };
    case "LOWER_RIGHT":
      return {
        ...state,
        positionName: "Lower Right",
        styles: {bottom: "50px", right: "0"},
      };
    case "DRAG_POSITIONS":
      return {
        ...state,
        positionName: "Floating...",
        styles: {left: `${payload.x}px`, top: `${payload.y}px`},
      };
    default:
      return state;
  }
};
