import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlertState, SetAlert } from "./types";

const initialState: IAlertState = {
  alert: false
};

export const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<SetAlert>) => {
			const { alert } = action.payload;
      state.alert = alert;
			console.log('alert: ', alert);
    },
  },
});

export default alertSlice.reducer;

export const { reducer, actions } = alertSlice;