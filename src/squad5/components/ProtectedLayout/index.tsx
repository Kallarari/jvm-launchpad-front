import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedLayout = () => {
    const auth = useContext(AuthContext)

    if (!auth.user?.email) {
        return <Navigate to='/acervo' />
    }

    return <Outlet/>
}