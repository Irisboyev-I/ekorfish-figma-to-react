import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    accessToken: string | null,
    refreshToken: string | null,
}

const initialState: AuthState = {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken')
}

const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<{ accessToken: string, refreshToken: string }>) {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            localStorage.getItem('accessToken', action.payload.accessToken)
            localStorage.getItem('refreshToken', action.payload.refreshToken)
        },
        logout(state) {
            state.refreshToken = null;
            state.accessToken = null;
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        }
    }
})

export const { setToken, logout } = authTokenSlice.actions
export default authTokenSlice.reducer