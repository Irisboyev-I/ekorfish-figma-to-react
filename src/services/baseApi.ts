import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'ekorBaseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
        prepareHeaders: (headers, { getState }) => {
            return headers
        }
    }),
    endpoints: () => ({})
})