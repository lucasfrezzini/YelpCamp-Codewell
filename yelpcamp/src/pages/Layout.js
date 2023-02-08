import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";


export default function Layout () {
    const { pathname } = useLocation()
    
    return(
        <>
            {pathname !== "/" && <Header />}
            <Outlet />
        </>
    )
}