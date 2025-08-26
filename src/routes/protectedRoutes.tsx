import type { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoutes() {
    const authState = useSelector((state: RootState) => state.authToken.accessToken)
    return (
        authState ? <Outlet /> : <Navigate to={'/'} />
    )
}
