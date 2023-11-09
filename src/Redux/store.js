import { configureStore } from '@reduxjs/toolkit';

import WebpageSlice from './slice';

const store = configureStore({
	reducer: {
		webpage: WebpageSlice
	}
});

export default store;