import { baseApi } from "./baseApi"

export const authServices = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credential) => ({
                url: '/auth/login',
                method: "POST",
                body: credential,
            })
        })
    }),
    overrideExisting: false
})

export const { useLoginMutation } = authServices