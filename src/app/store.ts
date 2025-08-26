import { baseApi } from "@/services/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "@/featerues/authTokenSlice"
import authTabsReducers from '@/featerues/authTabsSlice'

export const store = configureStore({
    reducer: {
        authToken: authTokenReducer,
        authTabs: authTabsReducers,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch