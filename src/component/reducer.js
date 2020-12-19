export const initialState = {
  content: [],
  homepageView: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return { ...state, content: [...state.content, action.item] };
    case "ADD_VIEWMODULE":
      return { ...state, homepageView: action.item };
    default:
      return state;
  }
};
