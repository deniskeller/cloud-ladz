import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './alerts/reducer';

export const setupStore = () => {
	return configureStore({
		reducer: {
			alerts: alertSlice.reducer,
		}
	});
}
export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];