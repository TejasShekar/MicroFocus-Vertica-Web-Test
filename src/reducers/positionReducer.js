export const positionReducer = (state, {type}) => {
  switch (type) {
    case "CENTER":
      return {
        ...state,
        positionName: "Center",
        styles: {alignItems: "center", justifyContent: "center"},
      };
    case "LOWER_RIGHT":
      return {
        ...state,
        positionName: "Lower Right",
        styles: {alignItems: "flex-end", justifyContent: "flex-end"},
      };
    default:
      return state;
  }
};
