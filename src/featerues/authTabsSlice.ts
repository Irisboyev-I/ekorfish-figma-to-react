import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


type AuthTabs = 'login' | 'register'

interface AuthTabsState {
    activeTabs: AuthTabs
}

const initialState: AuthTabsState = {
    activeTabs: 'login'
}

const authTabsSlice = createSlice({
    name: 'authTabs',
    initialState,
    reducers: {
        setAuthTabs: (state, action: PayloadAction<AuthTabs>) => {
            state.activeTabs = action.payload
        }
    }
})

export const { setAuthTabs } = authTabsSlice.actions
export default authTabsSlice.reducer
