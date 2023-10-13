const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.massage;
};
const handlefulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlefulfilledFetch = (state, { payload }) => {
  state.items = payload;
};

const handlefulfilledAdd = (state, { payload }) => {
  state.items = payload;
};

export {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledFetch,
  handlefulfilledAdd,
};
