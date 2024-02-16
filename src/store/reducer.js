const initialState = {
  isVisibale: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "setIsVisibale":
      return { ...state, isVisibale: !state.isVisibale };
    default:
      return state;
  }
}
